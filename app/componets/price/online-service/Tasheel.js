import Link from 'next/link'
import React from 'react'
import './About.css'

const Tasheel = () => {
  return (
    <div className='mt-4'>
        <div className='amerServices py-10 xl:px-32 lg:px-16 md:px-10 px-5 w-full flex flex-wrap items-center relative'>
            <div className='w-full'>
                <div className='border-l-[8px] border-black pl-10 w-full mt-5'>
                    <div>
                        <h1 className='text-black md:font-bold font-semibold md:text-4xl text-2xl font-semibold'>
                        Tas-heel Services
                        </h1>
                    </div>

                </div>
                <div className='flex flex-wrap w-full gap-5 mt-5 md:w-1/4 w  p-5 bg-white'>
                     <p className='text-sm text-grey1'>
                     Tas'heel System provides comprehensive online services covering the full spectrum of MOL application processes and more.
                     </p>
                     <Link href="/pages/pricing/online-service/required" className='py-3 w-full px-2 flex justify-between items-center text-lg font-semibold bg-[#ff512f] text-white'>
                     Apply Online
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 6H6C5.46957 6 4.96086 6.21071 4.58579 6.58579C4.21071 6.96086 4 7.46957 4 8V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V12M11 13L20 4M20 4H15M20 4V9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                     </Link>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Tasheel
