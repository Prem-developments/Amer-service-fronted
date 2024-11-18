import React from 'react'
import Link from 'next/link';
import './About.css'

const Goldenvisa = () => {
    const additionalDivs = [
        { id: 1, title: 'Golden Visa for Commercial Investor', inside: '2978.90 AED' },
        { id: 2, title: 'Golden Visa for Director / Manager', inside: '2978.90 AED' },
        { id: 3, title: 'Golden Visa for Doctors', inside: '2978.90 AED' },
        { id: 4, title: 'Golden Visa for Engineers', inside: '2978.90 AED' },
        { id: 5, title: 'Golden Visa for New Born Baby', inside: '1578.90 AED' },
        { id: 6, title: 'Golden Visa for PhD Holder', inside: '2978.90 AED' },
        { id: 7, title: 'Golden Visa for Scientists', inside: '2978.90 AED' },
        { id: 8, title: 'Golden Visa for Family Members', inside: '2978.90 AED' },
        { id: 9, title: 'Golden Visa for Bachelor Degree Holder / Professionals 300000 Aed or above Salary', inside: '2978.90 AED' },
        { id: 10, title: 'Golden Visa for Commercial Investor (With 2 Million Fixed Deposit in Bank)', inside: '2978.90 AED' },
        { id: 11, title: 'Golden Visa for Outstanding Student/ Highschool Graduate', inside: '2978.90 AED' },
        { id: 12, title: 'Golden Visa for Outstanding Student/ University Graduate', inside: '2978.90 AED' },
        { id: 13, title: 'Golden Visa for Creative People in Culture & Art', inside: '2978.90 AED' },
      ];



  return (
       <div className='mt-4'>
             <div className='bg-background py-10 xl:px-32 lg:px-16 md:px-10 px-5 w-full flex flex-wrap items-center relative'>
        <div className='shadow-lg w-full'>
            <div className='border-l-[8px] border-black pl-10 w-full mt-5'>
                <div>
                    <h1 className='text-black md:font-bold font-semibold md:text-4xl text-2xl font-semibold'> All Golden Visa Services</h1>
                </div>
    

            </div>
            <div className="flex flex-wrap gap-3 w-full items-stretch pt-5">
{additionalDivs.map((div) => (
  <div
    key={div.id}
    className="lg:w-[24%] md:w-[47%] w-full flex shadow-xl hover:shadow-2xl hover:scale-105 justify-between items-start flex-col gap-3 md:p-5 p-3 bg-white shrink rounded-2xl"
  >
    <div>
      <h1 className="text-black md:font-bold md:text-4xl !md:text-xl !text-lg !font-medium text-center py-5">
        {div.title}
      </h1>
    </div>
    <div className="w-full flex items-center justify-center">
      <Link
        href="/pages/pricing/online-service/required"
        className="w-fit px-4 rounded-lg gap-5 border border-black text-black text-sm font-semibold flex justify-between items-center"
      >
        <div className="bg-white w-full py-2">
           {div.inside} <br />
          
        </div>
        <div className="flex items-center justify-center gap-5">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
          </svg>
          <div className="w-[6px] h-7 bg-black"></div>
        </div>
      </Link>
    </div>
  </div>
))}
</div>

        </div>




     </div>

       </div>
    
  )
}

export default Goldenvisa
