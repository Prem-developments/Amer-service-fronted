import React from 'react'
import Link from 'next/link';

const Newrecedency = () => {
    const additionalDivs = [
        { id: 1, title: 'New Residency (1st time visiting) / 1 Year', inside: '362 AED' },
        { id: 2, title: 'New Residency (1st time visiting) / 2 Year', inside: '462 AED' },
        { id: 3, title: 'New Residency (Previously Visited UAE) / 1 Year', inside: '362 AED' },
        { id: 4, title: 'New Residency (Previously Visited UAE) / 2 Year', inside: '462 AED' },
      ];



  return (
    
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
    
  )
}

export default Newrecedency
