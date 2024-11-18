'use client'
import Link from 'next/link'
import React from 'react'
import './About.css'
import CountrySelect from '../contact/CountrySelect'

const Requiredform = () => {
  return (
    <div>
      <div className='bg-white text-[12px]  text-grey1 py-2 px-2 fixed bottom-0 left-0 w-full sm:hidden flex justify-between items-center z-[100]'>
          <Link href="/" className='!text-grey1 flex justify-center items-center flex-col gap-1 p-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><g clipPath="url(#clip0_804_2569)"><path d="M20 24H16C15.724 24 15.5 23.776 15.5 23.5V16.5C15.5 16.224 15.276 16 15 16H10C9.724 16 9.5 16.224 9.5 16.5V23.5C9.5 23.776 9.276 24 9 24H5C4.173 24 3.5 23.327 3.5 22.5V13H1.5C0.949 13 0.5 12.551 0.5 12C0.5 11.735 0.608 11.475 0.796 11.287L12.15 0.142988C12.344 -0.0470117 12.656 -0.0470117 12.85 0.142988L24.2 11.283C24.392 11.475 24.5 11.735 24.5 12C24.5 12.551 24.051 13 23.5 13H21.5V22.5C21.5 23.327 20.827 24 20 24ZM16.5 23H20C20.276 23 20.5 22.776 20.5 22.5V12.5C20.5 12.224 20.724 12 21 12H23.5L12.5 1.20099L1.5 11.997L4 12C4.276 12 4.5 12.224 4.5 12.5V22.5C4.5 22.776 4.724 23 5 23H8.5V16.5C8.5 15.673 9.173 15 10 15H15C15.827 15 16.5 15.673 16.5 16.5V23Z" fill="#4D4D4D"></path></g><defs><clipPath id="clip0_804_2569"><rect width="24" height="24" fill="white" transform="translate(0.5)"></rect></clipPath></defs></svg>
          <p className='font-semibold'>Home</p>
          </Link>
          <Link href="/" className='!text-grey1 flex justify-center items-center flex-col gap-1 p-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M20.2229 18.223L18 19.4456V21.9267C18 22.7968 17.2621 23.4843 16.3942 23.423L4.39419 22.5744C3.60878 22.5188 3 21.8655 3 21.0781V5.00856C3 4.76324 3.37412 3.34181 3.91234 3.41341L19.2605 0.693918C20.1726 0.546362 21 1.25066 21 2.17467V16.9087C21 17.4558 20.7022 17.9594 20.2229 18.223ZM16.5157 4.65906L3.99999 4.2658V21.078C3.99999 21.3405 4.20292 21.5583 4.46472 21.5768L16.4647 22.4253C16.754 22.4458 17 22.2166 17 21.9266V5.1588C17 4.88878 16.7856 4.66754 16.5157 4.65906Z" fill="#E0E0E0"></path><path fillRule="evenodd" clipRule="evenodd" d="M10.5 7.5C8.01472 7.5 6 9.51472 6 12C6 14.4853 8.01472 16.5 10.5 16.5C12.9853 16.5 15 14.4853 15 12C15 9.51472 12.9853 7.5 10.5 7.5ZM5 12C5 8.96243 7.46243 6.5 10.5 6.5C13.5376 6.5 16 8.96243 16 12C16 15.0376 13.5376 17.5 10.5 17.5C7.46243 17.5 5 15.0376 5 12Z" fill="#4D4D4D"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.91825 8.60814C9.66432 9.4546 9.5 10.6539 9.5 12C9.5 13.3461 9.66432 14.5454 9.91825 15.3919C10.0462 15.8183 10.1886 16.1269 10.324 16.3178C10.4171 16.4491 10.4779 16.4869 10.5 16.4971C10.5221 16.4869 10.5829 16.4491 10.676 16.3178C10.8114 16.1269 10.9538 15.8183 11.0817 15.3919C11.3357 14.5454 11.5 13.3461 11.5 12C11.5 10.6539 11.3357 9.4546 11.0817 8.60814C10.9538 8.18173 10.8114 7.87308 10.676 7.68219C10.5829 7.55089 10.5221 7.51314 10.5 7.50291C10.4779 7.51314 10.4171 7.55089 10.324 7.68219C10.1886 7.87308 10.0462 8.18173 9.91825 8.60814ZM9.5083 7.10366C9.72261 6.80151 10.0505 6.5 10.5 6.5C10.9495 6.5 11.2774 6.80151 11.4917 7.10366C11.7152 7.4188 11.8961 7.84238 12.0396 8.32079C12.3285 9.28398 12.5 10.5846 12.5 12C12.5 13.4154 12.3285 14.716 12.0396 15.6792C11.8961 16.1576 11.7152 16.5812 11.4917 16.8963C11.2774 17.1985 10.9495 17.5 10.5 17.5C10.0505 17.5 9.72261 17.1985 9.5083 16.8963C9.28478 16.5812 9.10395 16.1576 8.96043 15.6792C8.67147 14.716 8.5 13.4154 8.5 12C8.5 10.5846 8.67147 9.28398 8.96043 8.32079C9.10395 7.84238 9.28478 7.4188 9.5083 7.10366Z" fill="#4D4D4D"></path><path fillRule="evenodd" clipRule="evenodd" d="M5 12C5 11.7239 5.22386 11.5 5.5 11.5H15.5C15.7761 11.5 16 11.7239 16 12C16 12.2761 15.7761 12.5 15.5 12.5H5.5C5.22386 12.5 5 12.2761 5 12Z" fill="#4D4D4D"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.50129 18.9644C6.52096 18.689 6.7602 18.4816 7.03564 18.5013L14.0356 19.0013C14.3111 19.021 14.5184 19.2602 14.4987 19.5356C14.4791 19.8111 14.2398 20.0184 13.9644 19.9988L6.96439 19.4988C6.68895 19.4791 6.48161 19.2398 6.50129 18.9644Z" fill="#4D4D4D"></path><path fillRule="evenodd" clipRule="evenodd" d="M3 4.74928C3 3.90239 3.70064 3.22343 4.54711 3.25002L16.5471 3.62708C17.3568 3.65252 18 4.31625 18 5.12634V21.8941C18 22.7642 17.2621 23.4518 16.3942 23.3904L4.39421 22.5418C3.6088 22.4863 3.00002 21.8329 3.00002 21.0456L3 4.74928ZM4.5157 4.24953C4.23354 4.24066 4 4.46699 4 4.74928V21.0456C4 21.308 4.20293 21.5258 4.46473 21.5443L16.4647 22.3929C16.754 22.4134 17 22.1842 17 21.8941V5.12628C17 4.85625 16.7856 4.635 16.5157 4.62652L4.5157 4.24953Z" fill="#4D4D4D"></path></svg>       
                 <p className='font-semibold'>Apply Online</p>
          </Link>
          <Link href="/" className='!text-grey1 flex justify-center items-center flex-col gap-1 p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M4 2C4 1.17157 4.67157 0.5 5.5 0.5H19.5C20.3284 0.5 21 1.17157 21 2V22C21 22.8284 20.3284 23.5 19.5 23.5H5.5C4.67157 23.5 4 22.8284 4 22V2ZM5.5 1.5C5.22386 1.5 5 1.72386 5 2V22C5 22.2761 5.22386 22.5 5.5 22.5H19.5C19.7761 22.5 20 22.2761 20 22V2C20 1.72386 19.7761 1.5 19.5 1.5H5.5Z" fill="#4D4D4D"></path><path fillRule="evenodd" clipRule="evenodd" d="M8 20C8 19.7239 8.22386 19.5 8.5 19.5H16.5C16.7761 19.5 17 19.7239 17 20C17 20.2761 16.7761 20.5 16.5 20.5H8.5C8.22386 20.5 8 20.2761 8 20Z" fill="#4D4D4D"></path><path fillRule="evenodd" clipRule="evenodd" d="M9 17C9 16.7239 9.22386 16.5 9.5 16.5H15.5C15.7761 16.5 16 16.7239 16 17C16 17.2761 15.7761 17.5 15.5 17.5H9.5C9.22386 17.5 9 17.2761 9 17Z" fill="#4D4D4D"></path><path fillRule="evenodd" clipRule="evenodd" d="M12.5 3.5C10.0147 3.5 8 5.51472 8 8C8 10.4853 10.0147 12.5 12.5 12.5C14.9853 12.5 17 10.4853 17 8C17 5.51472 14.9853 3.5 12.5 3.5ZM7 8C7 4.96243 9.46243 2.5 12.5 2.5C15.5376 2.5 18 4.96243 18 8C18 11.0376 15.5376 13.5 12.5 13.5C9.46243 13.5 7 11.0376 7 8Z" fill="#4D4D4D"></path><path fillRule="evenodd" clipRule="evenodd" d="M12.6643 5.61332L9.33784 4.4728L9.66216 3.52686L12.9887 4.66737C14.0925 5.04583 14.3605 6.48431 13.467 7.23485L12.9462 7.67226C12.7827 7.80967 12.5916 7.91055 12.3859 7.96815L11.2836 8.2768C11.0676 8.33726 10.9184 8.53407 10.9184 8.75829V8.86759C10.9184 8.95762 10.9427 9.04597 10.9887 9.12333L11.3547 9.73826C11.7798 10.4523 11.5433 11.3757 10.8275 11.7977L9.75391 12.4306L9.24609 11.5691L10.3197 10.9362C10.5583 10.7956 10.6371 10.4878 10.4955 10.2497L10.1294 9.63481C9.99128 9.40274 9.91837 9.13767 9.91837 8.86759V8.75829C9.91837 8.08563 10.3662 7.49521 11.0139 7.31384L12.1163 7.00518C12.1848 6.98598 12.2485 6.95236 12.3031 6.90655L12.8238 6.46914C13.1216 6.21896 13.0323 5.73947 12.6643 5.61332Z" fill="#4D4D4D"></path><path fillRule="evenodd" clipRule="evenodd" d="M15.4855 8.40829L17.4361 7.99811L17.2192 7.00562L15.2687 7.4158C14.8677 7.5001 14.5224 7.75242 14.3153 8.11235L13.4693 9.5828C13.0355 10.3368 13.3252 11.3233 14.099 11.7267L15.2744 12.3396L15.7071 11.4385L14.5316 10.8256C14.2737 10.6911 14.1771 10.3622 14.3217 10.1109L15.1678 8.64046C15.2368 8.52049 15.3519 8.43639 15.4855 8.40829Z" fill="#4D4D4D"></path></svg>      
                <p className='font-semibold'>Tourist vIsa</p>
          </Link>
      </div>
      <div>
        <div className=' absolute right-0 top-[12%] h-[80vh] w-3/4 lg:block hidden'></div>
        <div className='relative md:pt-40 pt-20 min-h-screen'>
            <div className='flex flex-wrap justify-center items-start xl:px-32 lg:px-20 md:px-12  relative '>
                <div className='lg:w-1/2 w-full  relative  '>
                <div>
                    <div className='text-grey1 md:text-lg text-md py-10 px-5 '>
                        <div className='border-l-[8px] border-black pl-10 mb-5'>
                            <div>
                                <h1 className='text-black md:font-bold font-semibold md:text-4xl text-2xl undefined'>
                                Required Documents To Apply For Sponsored Visit Visa - 30 Days
                                </h1>
                            </div>
                        </div>
                        <div className='flex items-center mt-2 gap-7'>
                            <div className=' bg-black p-2'></div>
                            <p className='text-md'>Sponsor’s Original Emirates ID</p>
                        </div>
                        <div className='flex items-center mt-2 gap-7'>
                            <div className=' bg-black p-2'></div>
                            <p className='text-md'>Sponsor’s Emirates ID Copy, Residence Visa Copy & Passport Copy</p>
                        </div>
                        <div className='flex items-center mt-2 gap-7'>
                            <div className=' bg-black p-2'></div>
                            <p className='text-md'>Applicant’s Passport Copy [The passport should be valid for at least 6 months]</p>
                        </div>
                        <div className='flex items-center mt-2 gap-7'>
                            <div className=' bg-black p-2'></div>
                            <p className='text-md'>Applicant’s one Digital Photo [From Studio]</p>
                        </div>
                        <div className='flex items-center mt-2 gap-7'>
                            <div className=' bg-black p-2'></div>
                            <p className='text-md'>Birth certificate [Attested by the UAE MOFA & Translated into Arabic] – For Children</p>
                        </div>
                        <div className='flex items-center mt-2 gap-7'>
                            <div className=' bg-black p-2'></div>
                            <p className='text-md'>Marriage certificate [Attested by the UAE MOFA & Translated into Arabic] – For Spouse</p>
                        </div>
                        <div className='flex items-center mt-2 gap-7'>
                            <div className=' bg-black p-2'></div>
                            <p className='text-md'>Sponsor Birth certificate [Attested by the UAE MOFA & Translated into Arabic] – For Parents</p>
                        </div>
                        <div className='flex items-center mt-2 gap-7'>
                            <div className=' bg-black p-2'></div>
                            <p className='text-md'>
                            Trade Licence, MOA & Establishment card [If Sponsor Investor/Partner]</p>
                        </div>
                        <div className='flex items-center mt-2 gap-7'>
                            <div className=' bg-black p-2'></div>
                            <p className='text-md'>
                            Labour Contract with Ministry Stamp [If Sponsor working in Private Sector - Minimum Salary AED 4,000]</p>
                        </div>
                        <div className='flex items-center mt-2 gap-7'>
                            <div className=' bg-black p-2'></div>
                            <p className='text-md'>
                            Salary Certificate Issued by Free zone Authority [If Sponsor Working in Free Zone Sector - Minimum Salary AED 4,000]</p>
                        </div>
                        <div className='flex items-center mt-2 gap-7'>
                            <div className=' bg-black p-2'></div>
                            <p className='text-md'>
                            Salary Certificate Issued by Employer [If Sponsor Working in Govt./Semi Govt. Sector - Minimum Salary AED 4,000]</p>
                        </div>
                        <div className='flex items-center mt-2 gap-7 pl-16'>
                             <p className='text-md text-red-600'>
                            ** AED 253.15 to be paid, If the Sponsor doesn’t have an active Sponsorship file</p>
                        </div>
                        <div className='flex items-center mt-2 gap-7 pl-16'>
                             <p className='text-md text-red-600'>
                             ** There will be Security Deposit AED 1000 for each Applicant (Refundable)</p>
                        </div>
                        <div className='flex items-center mt-2 gap-7 pl-16'>
                             <p className='text-md text-red-600'>
                             ** NOC from Father Certified by Dubai Court [If Mother is the Sponsor] OR Death Certificate MOFA Attested [If father Deceased]</p>
                        </div>
                        <div className='flex items-center mt-2 gap-7 pl-16'>
                             <p className='text-md text-red-600'>
                             ** Applicant National ID Required for Pakistan, Afghanistan, Iran & Iraq Nationality</p>
                        </div>
                        


                    </div>
                    <div className='md:py-10 py-5 px-5'>
                        <div className='border-l-[8px] border-black pl-10 mb-5'>
                            <div>
                                <h1 className='text-black md:font-bold font-semibold md:text-4xl text-2xl undefined'>
                                A Step by Step Guide to Application Process
                                </h1>
                            </div>
                        </div>
                        <div className='flex items-center gap-7'>
                        <div class=" bg-black p-2"></div>
                        <p className='text-md mt-2'>The only Government services center operating 24 hours in the UAE. The only Government services center operating 24 hours in the UAE.</p>

                        </div>
                        <div className='flex items-center gap-7'>
                        <div class=" bg-black p-2"></div>
                        <p className='text-md mt-2'>The only Government services center operating on Friday and public holidays. The only Government services center operating on Friday and public holidays.</p>

                        </div>
                        <div className='flex items-center gap-7'>
                        <div class=" bg-black p-2"></div>
                        <p className='text-md mt-2'>There are sufficient parking space available in the area. There are sufficient parking space available in the area.</p>

                        </div>
                        <div className='flex items-center gap-7'>
                        <div class=" bg-black p-2"></div>
                        <p className='text-md mt-2'>One stop shop (you can finish all your Government transactions at Amer 247) One stop shop (you can finish all your Government transactions at Amer 247)</p>

                        </div>
                        <div className='flex items-center gap-7'>
                        <div class=" bg-black p-2"></div>
                        <p className='text-md mt-2'>Our customer happiness consultants are well trained to cater to all your needs. Our customer happiness consultants are well trained to cater to all your needs.</p>
                        </div>
                    </div>
                </div>
                </div>

                <div className='lg:w-1/2 w-full '>
                    <div className=''>
                     <div className='xl:w-3/4 w-full mx-auto bg-white p-5 shadow-md rounded-md'>
                     <div className=' w-full flex justify-between items-center'>
                        <div>
                            <div>
                                <h1 className='text-black md:font-bold font-semibold md:text-4xl text-2xl !text-2xl'> 
                                APPLY FOR Sponsored Visit Visa - 30 Days
                                </h1>
                            </div>
                            <p className='text-grey1 text-md'>
                            Fill out the form and apply online!
                            </p>
                        </div>
                        <div className='ml-2'>
                            <p className='text-grey1 text-md'>
                            (Inc. of VAT)
                            </p>
                            <div className='bg-[#ff512f4d] w-max text-[#ff512f] text-lg font-semibold p-2'>
                            Inside: 1250 AED 
                            <br/>
                            Outside: 600 AED
                            </div>
                          </div>
                     </div>

                     <form className='py-5 space-y-2'>
                        <div className='flex flex-col undefined'>
                            <label className='block mb-1 text-sm font-normal text-black'>
                            Full Name of Applicant (*)
                            </label>
                            <input type="text" className='text-[#AFAFAF] text-md shadow-lg rounded-lg bg-transparent border border-grey2
                        focus:border-black focus:outline-none block w-full  p-2 py-2 ' placeholder='Enter Full Name '  />

                        </div>
                        <div className='flex flex-col undefined'>
                            <label className='block mb-1 text-sm font-normal text-black'>
                            Full Name of Sponsor (*)
                            </label>
                            <input type="text" className='text-[#AFAFAF] text-md shadow-lg rounded-lg bg-transparent border border-grey2
                        focus:border-black focus:outline-none block w-full  p-2 py-2 ' placeholder='Enter Sponsor Full Name'  />

                        </div>
                        <div className='flex flex-col undefined'>
                            <label className='block mb-1 text-sm font-normal text-black'>
                            Sponsor Email ID (*)
                            </label>
                            <input type="text" className='text-[#AFAFAF] text-md shadow-lg rounded-lg bg-transparent border border-grey2
                        focus:border-black focus:outline-none block w-full  p-2 py-2 ' placeholder='abc@gmail.com'  />
                        </div>
                        <div className='flex flex-col undefined'>
                            <label className='block mb-1 text-sm font-normal text-black'>
                            Sponsor Mobile No. (*)
                            </label>
                           <CountrySelect/>
                        </div>
                        <div className='flex flex-col undefined'>
                            <label className='block mb-1 text-sm font-normal text-black'>
                            WhatsApp No. (*)
                            </label>
                           <CountrySelect/>
                        </div>
                        <div className='flex flex-col undefined'>
                            <label className='block mb-1 text-sm font-normal text-black'>
                            Account IBAN Number (*)
                            </label>
                            <input type="text" className='text-[#AFAFAF] text-md shadow-lg rounded-lg bg-transparent border border-grey2
                        focus:border-black focus:outline-none block w-full  p-2 py-2 ' placeholder='Enter IBAN Number'  />
                        </div>
                        
                        <div className='undefined'>
                          <label className='block mb-1 text-sm font-normal text-black'>
                          Application Priority
                          </label>
                          <select className='text-black text-md shadow-lg rounded-lg bg-transparent border border-gray-200  focus:border-black focus:outline-none block w-full p-2'>
                            <option value="disabled" > Select an option</option>
                            <option value="Normal" > Normal</option>
                            <option value="Urgent" >Urgent</option>
                          </select>

                        

                        </div>
                        <div className='undefined'>
                          <label className='block mb-1 text-sm font-normal text-black'>
                          Inside or Outside ?
                          <br/>
                          <span className='text-sm font-normal text-grey1'>
                          (Applicable only for entry permit applications)
                          </span>
                          </label>
                          <select className='text-black text-md shadow-lg rounded-lg bg-transparent border border-gray-200  focus:border-black focus:outline-none block w-full p-2'>
                            <option value="disabled" > Select an option</option>
                            <option value="Normal" > Inside</option>
                            <option value="Urgent" >Outside</option>
                          </select>
                          </div>

                          <div className='flex flex-col'>
                            <label className='block mb-1 text-base font-medium text-black'>
                            Upload Required Documents 
                            <br/>
                            <span className='class="text-sm font-normal text-grey1"'>
                            (Applicable only for entry permit applications)
                            </span>
                            </label>
                            <div className='flex'></div>
                            <input type="file" className='hidden' />
                            <div className='flex items-center justify-center w-full'>
                                <label className='flex flex-col items-center justify-center w-full h-32 border-2 shadow-lg rounded-lg border-gray-300 border-dashed  cursor-pointer bg-[#F9F9F9] '>
                                    <div className='flex flex-col items-center justify-center w-full h-32 border-2 shadow-lg rounded-lg border-gray-300 border-dashed  cursor-pointer bg-[#F9F9F9] '>
                                        <div className='flex flex-col items-center justify-center pt-5 pb-6 py-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M18.3954 27.7117C17.7732 27.712 17.1735 27.479 16.7147 27.0587C16.2559 26.6385 15.9712 26.0615 15.917 25.4417C15.6817 22.7568 15.6222 20.0594 15.7387 17.3667C15.5981 17.3572 15.4576 17.3472 15.317 17.3367L12.8337 17.1567C12.471 17.1302 12.1215 17.01 11.8192 16.8078C11.5169 16.6056 11.2724 16.3284 11.1094 16.0034C10.9464 15.6783 10.8707 15.3165 10.8895 14.9533C10.9084 14.5902 11.0213 14.2381 11.217 13.9317C13.0454 11.0717 16.3937 7.87169 19.1504 5.89169C19.5436 5.60937 20.0155 5.45752 20.4995 5.45752C20.9836 5.45752 21.4555 5.60937 21.8487 5.89169C24.6037 7.87169 27.952 11.0717 29.7787 13.9317C29.9745 14.2381 30.0873 14.5902 30.1062 14.9533C30.1251 15.3165 30.0493 15.6783 29.8863 16.0034C29.7234 16.3284 29.4788 16.6056 29.1765 16.8078C28.8743 17.01 28.5247 17.1302 28.162 17.1567L25.6787 17.3367L25.2587 17.3667C25.3754 20.06 25.3154 22.7567 25.0804 25.4417C25.0262 26.0615 24.7416 26.6385 24.2827 27.0587C23.8239 27.479 23.2242 27.712 22.602 27.7117H18.3954ZM18.302 16.27C18.1122 19.249 18.1473 22.238 18.407 25.2117H22.5904C22.8504 22.2384 22.8854 19.25 22.697 16.27C22.6867 16.1049 22.7092 15.9393 22.7633 15.7829C22.8175 15.6266 22.9021 15.4825 23.0123 15.3591C23.1226 15.2357 23.2562 15.1354 23.4055 15.064C23.5548 14.9926 23.7168 14.9516 23.882 14.9434C24.422 14.9167 24.9604 14.8834 25.4987 14.8434L27.3004 14.7134C25.7003 12.3561 23.6974 10.2991 21.3837 8.63669L20.4987 8.00169L19.6137 8.63669C17.2999 10.2991 15.2971 12.3561 13.697 14.7134L15.4987 14.845C16.037 14.8834 16.577 14.9167 17.1154 14.9434C17.2806 14.9516 17.4426 14.9926 17.5919 15.064C17.7412 15.1354 17.8748 15.2357 17.9851 15.3591C18.0953 15.4825 18.1799 15.6266 18.2341 15.7829C18.2882 15.9393 18.3107 16.1049 18.3004 16.27H18.302Z" fill="#FF512F"></path><path d="M10.082 28.3334C10.082 28.0019 9.95034 27.6839 9.71591 27.4495C9.48149 27.2151 9.16355 27.0834 8.83203 27.0834C8.50051 27.0834 8.18257 27.2151 7.94815 27.4495C7.71373 27.6839 7.58203 28.0019 7.58203 28.3334V31.6667C7.58203 33.2767 8.8887 34.5834 10.4987 34.5834H30.4987C31.2722 34.5834 32.0141 34.2761 32.5611 33.7291C33.1081 33.1821 33.4154 32.4403 33.4154 31.6667V28.3334C33.4154 28.0019 33.2837 27.6839 33.0492 27.4495C32.8148 27.2151 32.4969 27.0834 32.1654 27.0834C31.8338 27.0834 31.5159 27.2151 31.2815 27.4495C31.0471 27.6839 30.9154 28.0019 30.9154 28.3334V31.6667C30.9154 31.7772 30.8715 31.8832 30.7933 31.9613C30.7152 32.0395 30.6092 32.0834 30.4987 32.0834H10.4987C10.3882 32.0834 10.2822 32.0395 10.2041 31.9613C10.1259 31.8832 10.082 31.7772 10.082 31.6667V28.3334Z" fill="#FF512F"></path></svg>
                                            <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                                            Drag and drop files here to upload or Browse File
                                            </p>
                                            <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                                                or
                                            </p>
                                            <p className='text-xs text-gray-500 dark:text-gray-400'>
                                            Browse File
                                            </p>
                                        </div>

                                    </div>
                                    <input id="requiredDocument" class="hidden" multiple="" type="file" name="requiredDocument" />
                                </label>

                            </div>

                          </div>

                          <div className='flex flex-col relative'>
                            <label className='block mb-1 text-sm font-medium text-grey1 '>
                            Address (*)
                            </label>
                            <textarea cols="5" rows="3" placeholder='jhondeo' className='text-black shadow-lg rounded-lg text-md bg-transparent border border-gray-200  focus:border-black focus:outline-none block w-full p-2 '></textarea>

                          </div>
                          <div className='flex flex-col relative'>
                            <label className='block mb-1 text-sm font-medium text-grey1 '>
                            Comment (For any specific requirements)
                            </label>
                            <textarea cols="5" rows="3" placeholder='jhondeo' className='text-black shadow-lg rounded-lg text-md bg-transparent border border-gray-200  focus:border-black focus:outline-none block w-full p-2 '></textarea>

                          </div>
                          <div className='my-2'>
                <button className='flex gap-2 button-67 justify-between items-center btn text-white py-3 px-4 hover:scale-105 transition-all duration-300 undefined'>Submit Request
                    <div className='w-[6px] bg-white self-stretch min-h-[5px] undefined'>
                     </div>
                     </button>
            </div>

                     </form>
                     <span className='text-sm font-normal text-grey1'>
                     *If you have any questions or inquiries, you might find it in FAQs or kindly reach us on our WhatsApp +971 58 1257700 or Live Chat or you can send us an e-mail: info@amer247.com.
                     </span>

                     </div>
                    </div>
                </div>
                 
            </div>

        </div>
      </div>
    </div>
  )
}

export default Requiredform
