import React from 'react'
import './Header.css'

const Wedo = () => {
  return (
    <div className='md:py-20 py-5 lg:px-32 md:px-12  px-4  w-full flex  items-center bg-[#f9f9f9]'>
      <div>
        <div className='space-y-5'>
            <div >
                <h1 className='text-black md:font-bold font-semibold md:text-4xl text-2xl '> What We Do</h1>
            </div>
           <div>
            <h1 className='md:border-l-[8px] border-l-[6px] border-black md:pl-10 pl-5 text-grey1 font-[400] md:text-lg text-md undefined'>
            Here are the services we provide
            </h1>
           </div>
        </div>

        <div className='flex  gap-4 py-10 flex-wrap !justify-center items-stretch'>
            <div className='lg:w-[18%] md:w-[24%] w-[47%]  bg-white relative flex justify-center items-center flex-col gap-3 p-5 shadow-md rounded-lg shrink'>
                <p className='md:text-xl text-lg font-medium text-center '>
                AMER Services 
                </p>
            </div>
            <div className='lg:w-[18%] md:w-[24%] w-[47%]  bg-white relative flex justify-center items-center flex-col gap-3 p-5 shadow-md rounded-lg shrink'>
                <p className='md:text-xl text-lg font-medium text-center '>
                Emirates Identity Authority 
                </p>
            </div>
            <div className='lg:w-[18%] md:w-[24%] w-[47%]  bg-white relative flex justify-center items-center flex-col gap-3 p-5 shadow-md rounded-lg shrink'>
                <p className='md:text-xl text-lg font-medium text-center '>
                Medical Fitness Application 
                </p>
            </div>
            <div className='lg:w-[18%] md:w-[24%] w-[47%]  bg-white relative flex justify-center items-center flex-col gap-3 p-5 shadow-md rounded-lg shrink'>
                <p className='md:text-xl text-lg font-medium text-center '>
                Entry Permits 
                </p>
            </div>
            <div className='lg:w-[18%] md:w-[24%] w-[47%]  bg-white relative flex justify-center items-center flex-col gap-3 p-5 shadow-md rounded-lg shrink'>
                <p className='md:text-xl text-lg font-medium text-center '>
                Health Insurance Services 
                </p>
            </div>
            <div className='lg:w-[18%] md:w-[24%] w-[47%]  bg-white relative flex justify-center items-center flex-col gap-3 p-5 shadow-md rounded-lg shrink'>
                <p className='md:text-xl text-lg font-medium text-center '>
                Dubai Economy Services 
                </p>
            </div>
            <div className='lg:w-[18%] md:w-[24%] w-[47%]  bg-white relative flex justify-center items-center flex-col gap-3 p-5 shadow-md rounded-lg shrink'>
                <p className='md:text-xl text-lg font-medium text-center '>
                Company Establishment & Clearance 
                </p>
            </div>
        </div>

        <div className='flex md:justify-end py-5'>
            <div className='my-2'>
                <button className='flex gap-2 button-67 justify-between items-center btn text-white py-3 px-4 hover:scale-105 transition-all duration-300 undefined'>
                See More Services
                <div class="w-[6px] bg-white self-stretch min-h-[5px] undefined"></div>
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Wedo
