import Link from 'next/link'
import React from 'react'
import './Header.css'
const Who = () => {
  return (
    <div>
      <div className='md:py-20  py-10 lg:px-40 md:px-20 px-5 md:min-h-[80vh] flex justify-center items-center w-full'>
        <div className='flex flex-wrap w-full justify-between'>
        <div className='lg:w-2/3 w-full flex flex-col gap-5 py-2 ' >
           <div>
           <h1 className='text-black md:font-bold font-semibold md:text-4xl text-2xl '>
            Who We Are
            </h1>
           </div>
           <div>
            <h1 className='md:border-l-[8px] border-l-[6px] border-black md:pl-10 pl-5 text-grey1 font-[400] md:text-lg text-md undefined text-[#4d4d4d]'>
            Amer247 Center Was established in 2017 in collaboration with the General Directorate of Residency and Foreigners Affairs, and the experience was a direct application of the strategy of the Federal Government advocated by His Highness Sheikh Mohammed bin Rashid Al Maktoum, Prime Minister and Ruler of Dubai.
            </h1>
        </div>
        </div>
        
       
       <Link href="/" className='flex md:w-[30%] card1 cursor-default w-[48%] my-2 text-white shadow-lg justify-center rounded-lg items-center gap-2 flex-col md:py-5 py-2  false'>
       <img alt="icon" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" class="mb-4"  src='/assets/immigration.gif'style={{color: 'transparent'}}/>
       <h1 className='md:text-lg text-sm text-center md:font-medium '>Immigration Services</h1>
       </Link>
       <Link href="/" className='flex md:w-[30%] card1 cursor-default w-[48%] my-2 text-white shadow-lg justify-center rounded-lg items-center gap-2 flex-col md:py-5 py-2  false'> 
       <img alt="icon" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" class="mb-4" src='/assets/identitiy.gif' style={{color: 'transparent'}}/>
       <h1 className='md:text-lg text-sm text-center md:font-medium '> Golden Visa</h1>
       </Link>
       <Link href="/" className='flex md:w-[30%] card1 cursor-default w-[48%] my-2 text-white shadow-lg justify-center rounded-lg items-center gap-2 flex-col md:py-5 py-2  false'> 
       <img alt="icon" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" class="mb-4" src='/assets/identitiy.gif' style={{color: 'transparent'}}/>
       <h1 className='md:text-lg text-sm text-center md:font-medium '> Emirates Identity Authority</h1>
      
       </Link>
       <Link href="/" className='flex md:w-[30%] card1 cursor-default w-[48%] my-2 text-white shadow-lg justify-center rounded-lg items-center gap-2 flex-col md:py-5 py-2  false'> 
       <img alt="icon" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" class="mb-4" style={{color: 'transparent'}} src='/assets/medical.gif'/>
       <h1 className='md:text-lg text-sm text-center md:font-medium '> Medical Test Applications</h1>
       </Link>
       
       <Link href="/" className='flex md:hidden md:w-[30%] card1 cursor-default w-[48%] my-2 text-white shadow-lg justify-center rounded-lg items-center gap-2 flex-col md:py-5 py-2   '>
       <img alt="icon" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" class="mb-4"  src='/assets/immigration.gif'style={{color: 'transparent'}}/>
       <h1 className='md:text-lg text-sm text-center md:font-medium '>UAE Tourist Visa</h1>
        </Link>
       <Link href="/" className=' md:w-[30%] card1 cursor-default w-[48%] my-2 text-white shadow-lg justify-center rounded-lg items-center gap-2 flex-col md:py-5 py-2  flex md:hidden'> 
       <img alt="icon" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" class="mb-4" src='/assets/identitiy.gif' style={{color: 'transparent'}}/>
       <h1 className='md:text-lg text-sm text-center md:font-medium '> Apply Online</h1>
       </Link>
       </div>
      </div>
    </div>
  )
}

export default Who
