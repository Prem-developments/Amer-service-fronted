'use client'
import React from 'react'
import './Contact.css'
import Link from 'next/link'
import CountrySelect from './CountrySelect'

const Contactmain = () => {
  return (
    <div className=' min-h-screen h-full w-full '>
        <div className='flex flex-wrap lg:h-screen  justify-center items-center  relative mt-[140px] '>
            <div className='md:hidden block relative  w-full  bg-[#1A1B18] pt-6 pb-5'>
            <img alt="" loading="lazy" width="860" height="142" decoding="async" data-nimg="1" className="mx-auto w-1/2" src="/assets/contact1.svg" style={{color: 'transparent'}}/>
            </div>
            <div className='md:w-2/6 w-full md:bg-white bg-[#1A1B18] relative lg:top-[10%] xl:top-[0%] lg:left-[10%] z-10 p-5'>
           <div className='bg-white px-2 py-5'>
              <form className='space-y-3'>
                <div>
                    <h1 className='text-black md:font-bold font-semibold md:text-4xl text-2xl pb-3'>
                    Get in Touch
                    </h1>
                </div>
               <div className='flex flex-col undefined'>
              <label className='block mb-1 text-sm font-normal text-black'>
              Full Name
              </label>
              <input class="text-[#AFAFAF] text-md shadow-lg rounded-lg bg-transparent border border-grey2
                        focus:border-black focus:outline-none block w-full  p-2 py-2 " placeholder="John Doe" autocomplete="on" type="text" value="" name="fullName"></input>
               </div>
               <div className='flex flex-col undefined'>
              <label className='block mb-1 text-sm font-normal text-black'>
              Email
              </label>
              <input class="text-[#AFAFAF] text-md shadow-lg rounded-lg bg-transparent border border-grey2
                        focus:border-black focus:outline-none block w-full  p-2 py-2 " placeholder="example@example.com" autocomplete="on" type="text" value="" name="fullName"></input>
               </div>
               <div className='flex flex-col w-full'>
              <label className='block mb-1 text-sm font-normal text-black'>
              Enter Mobile No. (*)
              </label>
              <CountrySelect/>
               </div>
               <div className='flex flex-col relative'>
                 <label className='block mb-1 text-lg font-medium text-black'>
                 Your Reason For Contact
                 </label>
                 <select className='text-black text-md bg-transparent border border-black focus:border-black focus:outline-none block w-full p-2'>
                   <option value="" >Please Select</option>
                   <option value="visa" >Visa</option>
                   <option value="suggestion" >Suggestion</option>
                   <option value="complaint" >Complaint</option>
                   <option value="other" >Other</option>
                 </select>
               </div>
               <div className='flex flex-col undefined'>
              <label className='block mb-1 text-sm font-normal text-black'>
              Subject
              </label>
              <input class="text-[#AFAFAF] text-md shadow-lg rounded-lg bg-transparent border border-grey2
                        focus:border-black focus:outline-none block w-full  p-2 py-2 " placeholder="Subject" autocomplete="on" type="text" value="" name="fullName"></input>
               </div>
               <div className='flex flex-col undefined'>
              <label className='block mb-1 text-sm font-normal text-black'>
              Message
              </label>
              <input class="text-[#AFAFAF] text-md shadow-lg rounded-lg bg-transparent border border-grey2
                        focus:border-black focus:outline-none block w-full  p-2 py-2 " placeholder="Write Your Message" autocomplete="on" type="text" value="" name="fullName"></input>
               </div>
               <div className='my-2'>
                <button className='flex gap-2 button-67 justify-between items-center btn text-white py-3 px-4 hover:scale-105 transition-all duration-300 undefined'>Submit
                    <div className='w-[6px] bg-white self-stretch min-h-[5px] undefined'>
                     </div>
                     </button>
            </div>
              </form>
           </div>
            </div>

            <div className='md:w-4/6 w-full bg-[#1A1B18] md:h-screen flex flex-col justify-center  items-center relative '>
               <div className='lg:block hidden '>
               <img alt="" loading="lazy" width="860" height="142" decoding="async" data-nimg="1" className="mx-auto relative left-[30px] w-[65%]" src="/assets/contact3.svg" style={{color: 'transparent'}}/>
               </div>
               <div className='lg:w-1/2 mx-auto w-full'>
               <div className='w-full space-y-2 p-5 '>
                <div>
                 <h1 className='text-[#d6d6d6] md:font-bold font-semibold md:text-4xl text-2xl !text-xl !text-grey2'>
                 ADDRESS
                 </h1>
                </div>
                <p className='text-grey2 md:text-lg font-normal pb-2 '>
                24 Seven Government Transaction Center LLC17 A Street – Al Khabaisi (Behind Abu Baker Al Siddique Metro Station ) – Deira – Dubai, UAE.P.O.Box: 81143
                </p>
                <Link href="/" className='text-lg font-medium text-[#d6d6d6] flex gap-2 items-center border-l-4 pl-5 border-[#d6d6d6] !text-grey2 !border-grey2'>
                 <p>Follow Map</p>
                <div class="undefined"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M13.2312 6.88495C13.3523 6.78395 13.4921 6.70781 13.6426 6.66086C13.7931 6.61392 13.9514 6.5971 14.1084 6.61137C14.2655 6.62563 14.4181 6.6707 14.5577 6.744C14.6973 6.8173 14.8211 6.91739 14.922 7.03855L18.9216 11.8385C19.027 11.959 19.1072 12.0993 19.1575 12.2511C19.2079 12.403 19.2273 12.5635 19.2147 12.723C19.2022 12.8825 19.1578 13.0379 19.0843 13.18C19.0108 13.3221 18.9096 13.4481 18.7867 13.5505C18.6637 13.653 18.5216 13.7298 18.3685 13.7765C18.2155 13.8232 18.0546 13.8388 17.8955 13.8224C17.7363 13.806 17.582 13.7579 17.4417 13.681C17.3014 13.6041 17.1779 13.4999 17.0784 13.3745L13.0776 8.57455C12.874 8.33009 12.7758 8.01478 12.8046 7.69795C12.8334 7.38112 12.9869 7.08869 13.2312 6.88495Z" fill="black"></path><path fillRule="evenodd" clipRule="evenodd" d="M13.2312 18.328C12.9869 18.1243 12.8334 17.8318 12.8046 17.515C12.7758 17.1982 12.874 16.8829 13.0776 16.6384L17.0784 11.8384C17.1779 11.7131 17.3014 11.6089 17.4417 11.532C17.582 11.4551 17.7363 11.407 17.8955 11.3906C18.0546 11.3742 18.2155 11.3898 18.3685 11.4365C18.5216 11.4832 18.6637 11.56 18.7867 11.6624C18.9096 11.7648 19.0108 11.8908 19.0843 12.033C19.1578 12.1751 19.2022 12.3305 19.2147 12.49C19.2273 12.6495 19.2079 12.8099 19.1575 12.9618C19.1072 13.1137 19.027 13.254 18.9216 13.3744L14.922 18.1744C14.8211 18.2956 14.6973 18.3957 14.5577 18.469C14.4181 18.5423 14.2655 18.5873 14.1084 18.6016C13.9514 18.6158 13.7931 18.599 13.6426 18.5521C13.4921 18.5051 13.3523 18.429 13.2312 18.328Z" fill="black"></path><path fillRule="evenodd" clipRule="evenodd" d="M16.8 12.6067C16.8 12.925 16.6736 13.2302 16.4485 13.4553C16.2235 13.6803 15.9182 13.8067 15.6 13.8067L5.99999 13.8067C5.68173 13.8067 5.3765 13.6803 5.15146 13.4553C4.92642 13.2302 4.79999 12.925 4.79999 12.6067C4.79999 12.2885 4.92642 11.9833 5.15146 11.7582C5.3765 11.5332 5.68173 11.4067 5.99999 11.4067L15.6 11.4067C15.9182 11.4067 16.2235 11.5332 16.4485 11.7582C16.6736 11.9833 16.8 12.2885 16.8 12.6067Z" fill="black"></path></svg></div>
                
                </Link>
               </div>
                <div className=' w-full space-y-2 p-5'>
                    <div>
                        <h1 className='text-[#d6d6d6] md:font-bold font-semibold md:text-4xl text-2xl !text-xl !text-grey2'>
                          CONTACT INFO
                        </h1>
                    </div>
                    <div className='flex items-center gap-2 flex-wrap'>
                      <Link href="/" className='text-lg font-medium text-[#d6d6d6] flex gap-2 items-center border-l-4 pl-5 border-[#d6d6d6] !text-grey2 !border-grey2 font-normal'>
                      <p>E: info@amer247.com</p>
                      <div className='hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M13.2312 6.88495C13.3523 6.78395 13.4921 6.70781 13.6426 6.66086C13.7931 6.61392 13.9514 6.5971 14.1084 6.61137C14.2655 6.62563 14.4181 6.6707 14.5577 6.744C14.6973 6.8173 14.8211 6.91739 14.922 7.03855L18.9216 11.8385C19.027 11.959 19.1072 12.0993 19.1575 12.2511C19.2079 12.403 19.2273 12.5635 19.2147 12.723C19.2022 12.8825 19.1578 13.0379 19.0843 13.18C19.0108 13.3221 18.9096 13.4481 18.7867 13.5505C18.6637 13.653 18.5216 13.7298 18.3685 13.7765C18.2155 13.8232 18.0546 13.8388 17.8955 13.8224C17.7363 13.806 17.582 13.7579 17.4417 13.681C17.3014 13.6041 17.1779 13.4999 17.0784 13.3745L13.0776 8.57455C12.874 8.33009 12.7758 8.01478 12.8046 7.69795C12.8334 7.38112 12.9869 7.08869 13.2312 6.88495Z" fill="black"></path><path fillRule="evenodd" clipRule="evenodd" d="M13.2312 18.328C12.9869 18.1243 12.8334 17.8318 12.8046 17.515C12.7758 17.1982 12.874 16.8829 13.0776 16.6384L17.0784 11.8384C17.1779 11.7131 17.3014 11.6089 17.4417 11.532C17.582 11.4551 17.7363 11.407 17.8955 11.3906C18.0546 11.3742 18.2155 11.3898 18.3685 11.4365C18.5216 11.4832 18.6637 11.56 18.7867 11.6624C18.9096 11.7648 19.0108 11.8908 19.0843 12.033C19.1578 12.1751 19.2022 12.3305 19.2147 12.49C19.2273 12.6495 19.2079 12.8099 19.1575 12.9618C19.1072 13.1137 19.027 13.254 18.9216 13.3744L14.922 18.1744C14.8211 18.2956 14.6973 18.3957 14.5577 18.469C14.4181 18.5423 14.2655 18.5873 14.1084 18.6016C13.9514 18.6158 13.7931 18.599 13.6426 18.5521C13.4921 18.5051 13.3523 18.429 13.2312 18.328Z" fill="black"></path><path fillRule="evenodd" clipRule="evenodd" d="M16.8 12.6067C16.8 12.925 16.6736 13.2302 16.4485 13.4553C16.2235 13.6803 15.9182 13.8067 15.6 13.8067L5.99999 13.8067C5.68173 13.8067 5.3765 13.6803 5.15146 13.4553C4.92642 13.2302 4.79999 12.925 4.79999 12.6067C4.79999 12.2885 4.92642 11.9833 5.15146 11.7582C5.3765 11.5332 5.68173 11.4067 5.99999 11.4067L15.6 11.4067C15.9182 11.4067 16.2235 11.5332 16.4485 11.7582C16.6736 11.9833 16.8 12.2885 16.8 12.6067Z" fill="black"></path></svg>
                      </div>
                      </Link>
                      <Link href="/" className='text-lg font-medium text-[#d6d6d6] flex gap-2 items-center border-l-4 pl-5 border-[#d6d6d6] !text-grey2 !border-grey2 font-normal'>
                      <p>P: +971 4 2300500</p>
                      <div className='hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M13.2312 6.88495C13.3523 6.78395 13.4921 6.70781 13.6426 6.66086C13.7931 6.61392 13.9514 6.5971 14.1084 6.61137C14.2655 6.62563 14.4181 6.6707 14.5577 6.744C14.6973 6.8173 14.8211 6.91739 14.922 7.03855L18.9216 11.8385C19.027 11.959 19.1072 12.0993 19.1575 12.2511C19.2079 12.403 19.2273 12.5635 19.2147 12.723C19.2022 12.8825 19.1578 13.0379 19.0843 13.18C19.0108 13.3221 18.9096 13.4481 18.7867 13.5505C18.6637 13.653 18.5216 13.7298 18.3685 13.7765C18.2155 13.8232 18.0546 13.8388 17.8955 13.8224C17.7363 13.806 17.582 13.7579 17.4417 13.681C17.3014 13.6041 17.1779 13.4999 17.0784 13.3745L13.0776 8.57455C12.874 8.33009 12.7758 8.01478 12.8046 7.69795C12.8334 7.38112 12.9869 7.08869 13.2312 6.88495Z" fill="black"></path><path fillRule="evenodd" clipRule="evenodd" d="M13.2312 18.328C12.9869 18.1243 12.8334 17.8318 12.8046 17.515C12.7758 17.1982 12.874 16.8829 13.0776 16.6384L17.0784 11.8384C17.1779 11.7131 17.3014 11.6089 17.4417 11.532C17.582 11.4551 17.7363 11.407 17.8955 11.3906C18.0546 11.3742 18.2155 11.3898 18.3685 11.4365C18.5216 11.4832 18.6637 11.56 18.7867 11.6624C18.9096 11.7648 19.0108 11.8908 19.0843 12.033C19.1578 12.1751 19.2022 12.3305 19.2147 12.49C19.2273 12.6495 19.2079 12.8099 19.1575 12.9618C19.1072 13.1137 19.027 13.254 18.9216 13.3744L14.922 18.1744C14.8211 18.2956 14.6973 18.3957 14.5577 18.469C14.4181 18.5423 14.2655 18.5873 14.1084 18.6016C13.9514 18.6158 13.7931 18.599 13.6426 18.5521C13.4921 18.5051 13.3523 18.429 13.2312 18.328Z" fill="black"></path><path fillRule="evenodd" clipRule="evenodd" d="M16.8 12.6067C16.8 12.925 16.6736 13.2302 16.4485 13.4553C16.2235 13.6803 15.9182 13.8067 15.6 13.8067L5.99999 13.8067C5.68173 13.8067 5.3765 13.6803 5.15146 13.4553C4.92642 13.2302 4.79999 12.925 4.79999 12.6067C4.79999 12.2885 4.92642 11.9833 5.15146 11.7582C5.3765 11.5332 5.68173 11.4067 5.99999 11.4067L15.6 11.4067C15.9182 11.4067 16.2235 11.5332 16.4485 11.7582C16.6736 11.9833 16.8 12.2885 16.8 12.6067Z" fill="black"></path></svg>
                      </div>
                      </Link>
                      <Link href="/" className='text-lg font-medium text-[#d6d6d6] flex gap-2 items-center border-l-4 pl-5 border-[#d6d6d6] !text-grey2 !border-grey2 font-normal'>
                      <p>F : +971 4 2300510</p>
                      <div className='hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M13.2312 6.88495C13.3523 6.78395 13.4921 6.70781 13.6426 6.66086C13.7931 6.61392 13.9514 6.5971 14.1084 6.61137C14.2655 6.62563 14.4181 6.6707 14.5577 6.744C14.6973 6.8173 14.8211 6.91739 14.922 7.03855L18.9216 11.8385C19.027 11.959 19.1072 12.0993 19.1575 12.2511C19.2079 12.403 19.2273 12.5635 19.2147 12.723C19.2022 12.8825 19.1578 13.0379 19.0843 13.18C19.0108 13.3221 18.9096 13.4481 18.7867 13.5505C18.6637 13.653 18.5216 13.7298 18.3685 13.7765C18.2155 13.8232 18.0546 13.8388 17.8955 13.8224C17.7363 13.806 17.582 13.7579 17.4417 13.681C17.3014 13.6041 17.1779 13.4999 17.0784 13.3745L13.0776 8.57455C12.874 8.33009 12.7758 8.01478 12.8046 7.69795C12.8334 7.38112 12.9869 7.08869 13.2312 6.88495Z" fill="black"></path><path fillRule="evenodd" clipRule="evenodd" d="M13.2312 18.328C12.9869 18.1243 12.8334 17.8318 12.8046 17.515C12.7758 17.1982 12.874 16.8829 13.0776 16.6384L17.0784 11.8384C17.1779 11.7131 17.3014 11.6089 17.4417 11.532C17.582 11.4551 17.7363 11.407 17.8955 11.3906C18.0546 11.3742 18.2155 11.3898 18.3685 11.4365C18.5216 11.4832 18.6637 11.56 18.7867 11.6624C18.9096 11.7648 19.0108 11.8908 19.0843 12.033C19.1578 12.1751 19.2022 12.3305 19.2147 12.49C19.2273 12.6495 19.2079 12.8099 19.1575 12.9618C19.1072 13.1137 19.027 13.254 18.9216 13.3744L14.922 18.1744C14.8211 18.2956 14.6973 18.3957 14.5577 18.469C14.4181 18.5423 14.2655 18.5873 14.1084 18.6016C13.9514 18.6158 13.7931 18.599 13.6426 18.5521C13.4921 18.5051 13.3523 18.429 13.2312 18.328Z" fill="black"></path><path fillRule="evenodd" clipRule="evenodd" d="M16.8 12.6067C16.8 12.925 16.6736 13.2302 16.4485 13.4553C16.2235 13.6803 15.9182 13.8067 15.6 13.8067L5.99999 13.8067C5.68173 13.8067 5.3765 13.6803 5.15146 13.4553C4.92642 13.2302 4.79999 12.925 4.79999 12.6067C4.79999 12.2885 4.92642 11.9833 5.15146 11.7582C5.3765 11.5332 5.68173 11.4067 5.99999 11.4067L15.6 11.4067C15.9182 11.4067 16.2235 11.5332 16.4485 11.7582C16.6736 11.9833 16.8 12.2885 16.8 12.6067Z" fill="black"></path></svg>
                      </div>
                      </Link> 
                      <p className='text-grey2 md:text-lg font-normal pb-2 ' >
                      For PCR enquiries kindly send email to info@247medservices.com
                        </p> 
                    </div>
                </div>
               </div>

            </div>


        </div>
      
    </div>
  )
}

export default Contactmain
