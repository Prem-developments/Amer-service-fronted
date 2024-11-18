'use client'
import React, { useState } from 'react';
import Link from 'next/link';

import './About.css'; // Update the CSS path if necessary
import Sponsersed from '../Sponsered';
import Newborn from './Newborn';
import Newrecedency from './Newrecedency';
import Sponsor from './Sponsor';
import Idreneval from './Idreneval';

const Emirates = () => {
  const [showAll, setShowAll] = useState(false); // State to manage showing all divs
  const [activeDiv, setActiveDiv] = useState(null); // State to track which div is clicked

  const options = [
    { id: 1, label: 'All' },
    { id: 2, label: 'New Born Emirates ID' },
    { id: 3, label: 'New Residency' },
    { id: 4, label: 'Sponsor Transfer' },
    { id: 5, label: 'Emirates ID Renewal' },
    { id: 6, label: 'Emirates ID Replacement/Lost' },
    { id: 7, label: 'Golden Emirates ID' },
  ];

  // Toggle to show/hide more options
  const handleMoreLessToggle = () => {
    setShowAll(!showAll);
  };

  // Handle option click
  const handleOptionClick = (id) => {
    if (id === 1) {
      setActiveDiv(null); // If "All" is clicked, show all divs
    } else {
      setActiveDiv(id); // Set active div to the clicked option
    }
  };

  return (
    <div>
      <div className="mt-4">
        <h1 className="text-lg md:px-20 px-5 font-medium text-black py-2">
          See All or Choose options below
        </h1>

        {/* Dynamically rendering divs, show only 8 or all based on `showAll` */}
        <div className="w-full flex flex-wrap md:justify-center gap-2 py-4 md:px-20 px-5">
          {options.slice(0, showAll ? options.length : 8).map((option) => (
            <div
              key={option.id}
              onClick={() => handleOptionClick(option.id)} // Set active div on click
              className={`cursor-pointer shadow-lg text-center w-auto md:px-5 px-2 border md:text-md text-sm bg-black text-white border-grey2 flex items-center hover:bg-white hover:text-black py-2 ${
                activeDiv === option.id || (activeDiv === null && option.id === 1)
                  ? 'bg-white text-[#222]'
                  : ''
              }`}
            >
              <h2>{option.label}</h2>
            </div>
          ))}

          {/* The "More" or "Less" div */}
          
        </div>
      </div>

      {activeDiv === null ? (
        <div className="bg-background py-10 xl:px-32 lg:px-16 md:px-10 px-5 w-full flex flex-wrap items-center relative">
          <div className="w-full">
            <div className="border-l-[8px] border-black pl-10 w-full mt-5">
              <h1 className="text-black md:font-bold font-semibold md:text-4xl text-2xl">
              New Born Emirates ID
              </h1>
            </div>
            <Newborn/>
          </div>
          <div className="w-full">
            <div className="border-l-[8px] border-black pl-10 w-full mt-5">
              <h1 className="text-black md:font-bold font-semibold md:text-4xl text-2xl">
              New Residency
              </h1>
            </div>
            <Newrecedency/>
          </div>
          <div className="w-full">
            <div className="border-l-[8px] border-black pl-10 w-full mt-5">
              <h1 className="text-black md:font-bold font-semibold md:text-4xl text-2xl">
              Sponsor Transfer
              </h1>
            </div>
            <Sponsor/>
          </div>
          <div className="w-full">
            <div className="border-l-[8px] border-black pl-10 w-full mt-5">
              <h1 className="text-black md:font-bold font-semibold md:text-4xl text-2xl">
              Emirates ID Renewal
              </h1>
            </div>
            <Idreneval/>
          </div>
          <div className="w-full">
           <div>
           <div className="border-l-[8px] border-black pl-10 w-full mt-5">
              <div>
                <h1 className="text-black md:font-bold font-semibold md:text-4xl text-2xl">
                Emirates ID Replacement/Lost
                </h1>
              </div>
             
            </div>
            <div className='flex flex-wrap gap-3 w-full items-stretch  pt-5'>
                <div className='lg:w-[24%] md:w-[47%] w-full flex shadow-xl hover:shadow-2xl hover:scale-105 justify-between items-start flex-col gap-3 md:p-5 p-3 bg-white shrink rounded-2xl'>
                    <div>
                        <h1 className='text-black md:font-bold font-semibold md:text-4xl text-2xl !md:text-xl !text-lg !font-medium text-center py-5'>
                        Emirates ID Replacement/Lost
                        </h1>
                    </div>
                    <div className='w-full flex items-center justify-center'>
                        <Link href="/" className='w-fit px-4 rounded-lg gap-5 border border-black text-black text-sm font-semibold flex justify-between items-center'>
                         <div className='bg-white w-full py-2'>
                         562 AED
                         </div>
                         <div class="flex items-center justify-center gap-5"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg><div class="w-[6px] h-7 bg-black"></div></div>
                        </Link>

                    </div>

                </div>

            </div>
           </div>
          </div>
          <div className="w-full">
           <div>
           <div className="border-l-[8px] border-black pl-10 w-full mt-5">
              <div>
                <h1 className="text-black md:font-bold font-semibold md:text-4xl text-2xl">
                Golden Emirates ID
                </h1>
              </div>
             
            </div>
            <div className='flex flex-wrap gap-3 w-full items-stretch  pt-5'>
                <div className='lg:w-[24%] md:w-[47%] w-full flex shadow-xl hover:shadow-2xl hover:scale-105 justify-between items-start flex-col gap-3 md:p-5 p-3 bg-white shrink rounded-2xl'>
                    <div>
                        <h1 className='text-black md:font-bold font-semibold md:text-4xl text-2xl !md:text-xl !text-lg !font-medium text-center py-5'>
                        Golden Emirates ID
                        </h1>
                    </div>
                    <div className='w-full flex items-center justify-center'>
                        <Link href="/" className='w-fit px-4 rounded-lg gap-5 border border-black text-black text-sm font-semibold flex justify-between items-center'>
                         <div className='bg-white w-full py-2'>
                         1262 AED
                         </div>
                         <div class="flex items-center justify-center gap-5"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg><div class="w-[6px] h-7 bg-black"></div></div>
                        </Link>

                    </div>

                </div>

            </div>
           </div>
          </div>
        </div>
      ) : (
        <div className="bg-background py-10 xl:px-32 lg:px-16 md:px-10 px-5 w-full flex flex-wrap items-center relative">
          <div className="w-full">
            <div className="border-l-[8px] border-black pl-10 w-full mt-5">
              <h1 className="text-black md:font-bold font-semibold md:text-4xl text-2xl">
                {options.find((option) => option.id === activeDiv)?.label}
              </h1>
            </div>
          </div>

          {activeDiv === 2 && <Newborn/>}
          {activeDiv === 3 && <Newrecedency/>}
          {activeDiv === 4 && <Sponsor/>}
          {activeDiv === 5 && <Idreneval/>}
          {activeDiv === 6 && 
          <div className='flex flex-wrap gap-3 w-full items-stretch  pt-5'>
          <div className='lg:w-[24%] md:w-[47%] w-full flex shadow-xl hover:shadow-2xl hover:scale-105 justify-between items-start flex-col gap-3 md:p-5 p-3 bg-white shrink rounded-2xl'>
              <div>
                  <h1 className='text-black md:font-bold font-semibold md:text-4xl text-2xl !md:text-xl !text-lg !font-medium text-center py-5'>
                  Emirates ID Replacement/Lost
                  </h1>
              </div>
              <div className='w-full flex items-center justify-center'>
                  <Link href="/" className='w-fit px-4 rounded-lg gap-5 border border-black text-black text-sm font-semibold flex justify-between items-center'>
                   <div className='bg-white w-full py-2'>
                   562 AED
                   </div>
                   <div class="flex items-center justify-center gap-5"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg><div class="w-[6px] h-7 bg-black"></div></div>
                  </Link>

              </div>

          </div>

      </div>
          }
           {activeDiv === 7 && 
          <div className='flex flex-wrap gap-3 w-full items-stretch  pt-5'>
          <div className='lg:w-[24%] md:w-[47%] w-full flex shadow-xl hover:shadow-2xl hover:scale-105 justify-between items-start flex-col gap-3 md:p-5 p-3 bg-white shrink rounded-2xl'>
              <div>
                  <h1 className='text-black md:font-bold font-semibold md:text-4xl text-2xl !md:text-xl !text-lg !font-medium text-center py-5'>
                  Golden Emirates ID
                  </h1>
              </div>
              <div className='w-full flex items-center justify-center'>
                  <Link href="/" className='w-fit px-4 rounded-lg gap-5 border border-black text-black text-sm font-semibold flex justify-between items-center'>
                   <div className='bg-white w-full py-2'>
                   1262 AED
                   </div>
                   <div class="flex items-center justify-center gap-5"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg><div class="w-[6px] h-7 bg-black"></div></div>
                  </Link>

              </div>

          </div>

      </div>
          }

        </div>
      )}
    </div>
  );
};

export default Emirates;
