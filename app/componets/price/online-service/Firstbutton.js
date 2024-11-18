'use client'
import React, { useState } from 'react';
import './About.css';
import Link from 'next/link';
import Sponder from './Sponder';
import Visaextention from './Visaextention';
import Rvreneval from './Rvreneval';
import Rvstamping from './Rvstamping';
import Cancellation from './Cancellation';
import Datamodi from './Datamodi';
import Travelreport from './Travelreport';
import Ecard from './Ecard';
import Changestatus from './Changestatus';
import Sponsersed from './Sponsered';
import Emirates from './Emirates/Emirates';


const Firstbutton = () => {
    const [showAll, setShowAll] = useState(false); // State to manage showing all divs
    const [activeDiv, setActiveDiv] = useState(null); // State to track which div is clicked

    const options = [
        { id: 1, label: 'All' },
        { id: 2, label: 'Sponsored Visit Visa' },
        { id: 3, label: 'New Born Residence Visa' },
        { id: 4, label: 'Visa Extension' },
        { id: 5, label: 'Residence Visa Renewal' },
        { id: 6, label: 'Residence Visa Stamping' },
        { id: 7, label: 'Cancellation' },
        { id: 8, label: 'Data Modification' },
        { id: 9, label: 'Travel Report' },
        { id: 10, label: 'Establishment Card' },
        { id: 11, label: 'Change Status' },
        { id: 12, label: 'Security Deposit' },
        { id: 13, label: 'Holding Visa' },
      ];
      const additionalDivs = [
        { id: 1, title: 'Spouse Residence Visa', inside: '1188.90 AED', outside: '538.90 AED' },
        { id: 2, title: 'Son / Daughter Residence Visa', inside: '1500.00 AED', outside: '800.00 AED' },
        { id: 3, title: 'Parent’s Residence Visa', inside: '2200.00 AED', outside: '1200.00 AED' },
        { id: 4, title: 'Investor/Partner Visa', inside: '1000.00 AED', outside: '500.00 AED' },
        { id: 5, title: 'Employment Visa', inside: '2500.00 AED', outside: '1300.00 AED' },
        { id: 6, title: 'Virtual Work Visa [Remote Work Visa]', inside: '800.00 AED' },
        { id: 7, title: 'Re-Entry Permit', inside: '800.00 AED' },
      ];

      const handleMoreLessToggle = () => {
    setShowAll((prev) => !prev); // Toggle the showAll state
  };

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

        {/* Dynamically rendering divs, show only 8 or more based on `showAll` */}
        <div className="w-full flex flex-wrap md:justify-center gap-2 py-4 md:px-20 px-5">
          {options.slice(0, showAll ? options.length : 8).map((option) => (
            <div
              key={option.id}
              onClick={() => handleOptionClick(option.id)} // Set active div on click
              className={`cursor-pointer shadow-lg text-center w-auto md:px-5 px-2 border md:text-md text-sm bg-black text-white border-grey2 flex items-center hover:bg-white hover:text-black py-2 ${
                activeDiv === option.id || (activeDiv === null && option.id === 1) ? 'bg-white text-[#222]' : ''
              }`}
            >
              <h2>{option.label}</h2>
            </div>
          ))}

          {/* The "More" or "Less" div with custom SVG */}
          <div
            onClick={handleMoreLessToggle}
            className="cursor-pointer px-4 py-1 space-x-2 flex items-center text-white bg-black"
          >
            <h2>{showAll ? 'Less' : 'More'}</h2>
            {showAll ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M20 6.66602L10 16.666M20 6.66602L30 16.666M20 6.66602V24.166M20 33.3327V29.166"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="30"
                viewBox="0 0 30 35"
                fill="none"
              >
                <path
                  d="M20.5 33.3334L30.5 23.3334M20.5 33.3334L10.5 23.3334M20.5 33.3334L20.5 15.8334M20.5 6.66671L20.5 10.8334"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* Render the specific divs based on the active div */}
      {activeDiv === null ? (
        <div className="bg-background py-10 xl:px-32 lg:px-16 md:px-10 px-5 w-full flex flex-wrap items-center relative">
          <div className="w-full">
           <div>
           <div className="border-l-[8px] border-black pl-10 w-full mt-5">
              <div>
                <h1 className="text-black md:font-bold font-semibold md:text-4xl text-2xl">
                  New Entry Permits
                </h1>
              </div>
             
            </div>
            <Sponder/>
           </div>
          </div>
          <div className="w-full">
           <div>
           <div className="border-l-[8px] border-black pl-10 w-full mt-5">
              <div>
                <h1 className="text-black md:font-bold font-semibold md:text-4xl text-2xl">
                 Long Term Visa
                </h1>
              </div>
             
            </div>
            <div className='flex flex-wrap gap-3 w-full items-stretch  pt-5'>
                <div className='lg:w-[24%] md:w-[47%] w-full flex shadow-xl hover:shadow-2xl hover:scale-105 justify-between items-start flex-col gap-3 md:p-5 p-3 bg-white shrink rounded-2xl'>
                    <div>
                        <h1 className='text-black md:font-bold font-semibold md:text-4xl text-2xl !md:text-xl !text-lg !font-medium text-center py-5'>
                        Long Term Visit Visa Inside the Country
                        </h1>
                    </div>
                    <div className='w-full flex items-center justify-center'>
                        <Link href="/pages/pricing/online-service/required" className='w-fit px-4 rounded-lg gap-5 border border-black text-black text-sm font-semibold flex justify-between items-center'>
                         <div className='bg-white w-full py-2'>
                         Inside 1225.90 AED                
                         <br/>
                         Outside: 576.90 AED
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
                Visa Extension
                </h1>
              </div>
             
            </div>
             <Visaextention/>
           </div>
          </div>
          <div className="w-full">
           <div>
           <div className="border-l-[8px] border-black pl-10 w-full mt-5">
              <div>
                <h1 className="text-black md:font-bold font-semibold md:text-4xl text-2xl">
                New Born Residence Visa
                </h1>
              </div>
             
            </div>
            <div className='flex flex-wrap gap-3 w-full items-stretch  pt-5'>
                <div className='lg:w-[24%] md:w-[47%] w-full flex shadow-xl hover:shadow-2xl hover:scale-105 justify-between items-start flex-col gap-3 md:p-5 p-3 bg-white shrink rounded-2xl'>
                    <div>
                        <h1 className='text-black md:font-bold font-semibold md:text-4xl text-2xl !md:text-xl !text-lg !font-medium text-center py-5'>
                        New Born Residence Visa
                        </h1>
                    </div>
                    <div className='w-full flex items-center justify-center'>
                        <Link href="/pages/pricing/online-service/required" className='w-fit px-4 rounded-lg gap-5 border border-black text-black text-sm font-semibold flex justify-between items-center'>
                         <div className='bg-white w-full py-2'>
                         Inside 609.90 AED                
                         
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
                Residence Visa Renewal
                </h1>
              </div>
             
            </div>
             <Rvreneval/>
           </div>
          </div>
          <div className="w-full">
           <div>
           <div className="border-l-[8px] border-black pl-10 w-full mt-5">
              <div>
                <h1 className="text-black md:font-bold font-semibold md:text-4xl text-2xl">
                Residence Visa Stamping
                </h1>
              </div>
             
            </div>
             <Rvstamping/>
           </div>
          </div>
          <div className="w-full">
           <div>
           <div className="border-l-[8px] border-black pl-10 w-full mt-5">
              <div>
                <h1 className="text-black md:font-bold font-semibold md:text-4xl text-2xl">
               Cancellation
                </h1>
              </div>
             
            </div>
             <Cancellation/>
           </div>
          </div>
          <div className="w-full">
           <div>
           <div className="border-l-[8px] border-black pl-10 w-full mt-5">
              <div>
                <h1 className="text-black md:font-bold font-semibold md:text-4xl text-2xl">
               Data Modification
                </h1>
              </div>
             
            </div>
             <Datamodi/>
           </div>
          </div>
          <div className="w-full">
           <div>
           <div className="border-l-[8px] border-black pl-10 w-full mt-5">
              <div>
                <h1 className="text-black md:font-bold font-semibold md:text-4xl text-2xl">
               Travel Report
                </h1>
              </div>
             
            </div>
             <Travelreport/>
           </div>
          </div>
          <div className="w-full">
           <div>
           <div className="border-l-[8px] border-black pl-10 w-full mt-5">
              <div>
                <h1 className="text-black md:font-bold font-semibold md:text-4xl text-2xl">
               Establishment Card
                </h1>
              </div>
             
            </div>
             <Ecard/>
           </div>
          </div>
          <div className="w-full">
           <div>
           <div className="border-l-[8px] border-black pl-10 w-full mt-5">
              <div>
                <h1 className="text-black md:font-bold font-semibold md:text-4xl text-2xl">
               Change Status
                </h1>
              </div>
             
            </div>
             <Changestatus/>
           </div>
          </div>
          <div className="w-full">
           <div>
           <div className="border-l-[8px] border-black pl-10 w-full mt-5">
              <div>
                <h1 className="text-black md:font-bold font-semibold md:text-4xl text-2xl">
                Security Deposit
                </h1>
              </div>
             
            </div>
            <div className='flex flex-wrap gap-3 w-full items-stretch  pt-5'>
                <div className='lg:w-[24%] md:w-[47%] w-full flex shadow-xl hover:shadow-2xl hover:scale-105 justify-between items-start flex-col gap-3 md:p-5 p-3 bg-white shrink rounded-2xl'>
                    <div>
                        <h1 className='text-black md:font-bold font-semibold md:text-4xl text-2xl !md:text-xl !text-lg !font-medium text-center py-5'>
                        Security Deposit
                        </h1>
                    </div>
                    <div className='w-full flex items-center justify-center'>
                        <Link href="/pages/pricing/online-service/required" className='w-fit px-4 rounded-lg gap-5 border border-black text-black text-sm font-semibold flex justify-between items-center'>
                         <div className='bg-white w-full py-2'>
                         Cost Depends on Application

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
                Holding Visa
                </h1>
              </div>
             
            </div>
            <div className='flex flex-wrap gap-3 w-full items-stretch  pt-5'>
                <div className='lg:w-[24%] md:w-[47%] w-full flex shadow-xl hover:shadow-2xl hover:scale-105 justify-between items-start flex-col gap-3 md:p-5 p-3 bg-white shrink rounded-2xl'>
                    <div>
                        <h1 className='text-black md:font-bold font-semibold md:text-4xl text-2xl !md:text-xl !text-lg !font-medium text-center py-5'>
                        Holding Visa
                        </h1>
                    </div>
                    <div className='w-full flex items-center justify-center'>
                        <Link href="/pages/pricing/online-service/required" className='w-fit px-4 rounded-lg gap-5 border border-black text-black text-sm font-semibold flex justify-between items-center'>
                         <div className='bg-white w-full py-2'>
                        398.90 AED

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
                Sponsored Visit Visa
                </h1>
              </div>
             
            </div>
             <Sponsersed/>
           </div>
          </div>
          
          {/* Extra div for Sponsored Visit Visa */}
          
          
          {/* Repeat the structure for other sections */}
        </div>
      ) : (
        // Render the divs based on the clicked option
        <div className="bg-background py-10 xl:px-32 lg:px-16 md:px-10 px-5 w-full flex flex-wrap items-center relative">
          <div className="w-full">
            <div className="border-l-[8px] border-black pl-10 w-full mt-5">
              <div>
                <h1 className="text-black md:font-bold font-semibold md:text-4xl text-2xl">
                  {options.find((option) => option.id === activeDiv)?.label}
                </h1>
              </div>
            </div>
          </div>
          
          {/* Show "prem is great" when Sponsored Visit Visa is clicked */}
          {activeDiv === 2 && (
            <Sponsersed/>
          )}
           {activeDiv === 3 && (
            <div className='flex flex-wrap gap-3 w-full items-stretch  pt-5'>
            <div className='lg:w-[24%] md:w-[47%] w-full flex shadow-xl hover:shadow-2xl hover:scale-105 justify-between items-start flex-col gap-3 md:p-5 p-3 bg-white shrink rounded-2xl'>
                <div>
                    <h1 className='text-black md:font-bold font-semibold md:text-4xl text-2xl !md:text-xl !text-lg !font-medium text-center py-5'>
                    New Born Residence Visa
                    </h1>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <Link href="/pages/pricing/online-service/required" className='w-fit px-4 rounded-lg gap-5 border border-black text-black text-sm font-semibold flex justify-between items-center'>
                     <div className='bg-white w-full py-2'>
                     Inside 609.90 AED                
                     
                     </div>
                     <div class="flex items-center justify-center gap-5"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg><div class="w-[6px] h-7 bg-black"></div></div>
                    </Link>

                </div>

            </div>

        </div>
          )}
          {activeDiv === 4 && (
            <Visaextention/>
          )}
           {activeDiv === 5 && (
             <Rvreneval/>
          )}
           {activeDiv === 6 && (
             <Rvstamping/>
          )}
           {activeDiv === 7 && (
             <Cancellation/>
          )}
          {activeDiv === 8 && (
             <Datamodi/>
          )}
           {activeDiv === 9 && (
             <Travelreport/>
          )}
           {activeDiv === 10 && (
             <Ecard/>
          )}
          {activeDiv === 11 && (
             <Changestatus/>
          )}
          {activeDiv === 12 && (
            <div className='flex flex-wrap gap-3 w-full items-stretch  pt-5'>
            <div className='lg:w-[24%] md:w-[47%] w-full flex shadow-xl hover:shadow-2xl hover:scale-105 justify-between items-start flex-col gap-3 md:p-5 p-3 bg-white shrink rounded-2xl'>
                <div>
                    <h1 className='text-black md:font-bold font-semibold md:text-4xl text-2xl !md:text-xl !text-lg !font-medium text-center py-5'>
                    Security Deposit
                    </h1>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <Link href="/pages/pricing/online-service/required" className='w-fit px-4 rounded-lg gap-5 border border-black text-black text-sm font-semibold flex justify-between items-center'>
                     <div className='bg-white w-full py-2'>
                     Cost Depends on Application               
                     
                     </div>
                     <div class="flex items-center justify-center gap-5"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg><div class="w-[6px] h-7 bg-black"></div></div>
                    </Link>

                </div>

            </div>

        </div>
          )}
          {activeDiv === 13 && (
            <div className='flex flex-wrap gap-3 w-full items-stretch  pt-5'>
            <div className='lg:w-[24%] md:w-[47%] w-full flex shadow-xl hover:shadow-2xl hover:scale-105 justify-between items-start flex-col gap-3 md:p-5 p-3 bg-white shrink rounded-2xl'>
                <div>
                    <h1 className='text-black md:font-bold font-semibold md:text-4xl text-2xl !md:text-xl !text-lg !font-medium text-center py-5'>
                    Holding Visa
                    </h1>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <Link href="/pages/pricing/online-service/required" className='w-fit px-4 rounded-lg gap-5 border border-black text-black text-sm font-semibold flex justify-between items-center'>
                     <div className='bg-white w-full py-2'>
                     398.99 AED
                     </div>
                     <div class="flex items-center justify-center gap-5"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg><div class="w-[6px] h-7 bg-black"></div></div>
                    </Link>

                </div>

            </div>

        </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Firstbutton
