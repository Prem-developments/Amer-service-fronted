import React from 'react'
import './News.css'
import Link from 'next/link'

const date = "25-10-2023";
const link = "/";

const divData = [
  {
    title: "Now Apply Golden Visa UAE through Amer247",
    description:
      "UAE has started issuing a 10-year golden visa. This visa is going to be awarded to some professionals, including physicians.",
  },
  {
    title: "How can I change my own (Employment) visa and dependents visa without exit the country?",
    description:
      "You can either hold your dependents’ visa or cancel and apply for a new visa. to hold your family visa ...",
  },
  {
    title: "How to Apply for Visa Fine Waiver in Dubai?",
    description:
      "Overstaying more than the grace period provided by the UAE Government may lead to fines. However, if you have a ...",
  },
  {
    title: "How to transfer child’s visa sponsorship from father to mother in Dubai?",
    description:
      "EIn some circumstances, there may be a situation where you may have to transfer the sponsorship of your child’s visa ..",
  },
  {
    title: "How to apply Change Status from (Visit /Tourist Visa) in Dubai UAE?",
    description:
      "No matter you’re on visit or tourist visa, on-arrival national, or a Dubai resident looking to cancel your residence and ...",
  },
  {
    title: "How to apply Establishment Immigration Card in Dubai (New & Renewal)",
    description:
      "A company must apply for an establishment immigration card or a new immigration computer card. This card files your company ...",
  },
  {
    title: "How a Mother or Single Mother can Sponsor her child in Dubai- UAE?",
    description:
      "A mother can sponsor her children on Residence visa if she meets the following conditions. Now the procedure is easier ...",
  },
  {
    title: "Renewing Family Visa (Resident Sponsor) Dubai",
    description:
      "Sponsor must renew his/her family residence visa before it expires, grace period of 30 days to stay in the UAE ...",
  },
  {
    title: "How to apply Family Visa Stamping (After Entry/Status Change) in Dubai?",
    description:
      "The family Visa holder (not in the country) should enter UAE within 60 days from the date of issue, after ...",
  },
  {
    title: "How to Cancel my Family Residence Visa in Dubai (Inside & Outside)",
    description:
      "An individual residence sponsoring his/her spouse, children, and other dependents must cancel the dependents’ visas first before he cancels his/her ...",
  },
  {
    title: "How can I apply Entry Permit Residence (Wife & Children) in Dubai Expatriate Sponsor?",
    description:
      "Now applying entry permit (residence) for the family is easier and fast. If you have all the required documents ready, ...",
  },
  {
    title: "How to sponsor my son above 18 in UAE?",
    description:
      "Expatriate parents who have valid UAE residence visas can sponsor their son/s up to the age of 18. Existing can ...",
  },
  {
    title: "How to Sponsor my Parents on Residence Visa in Dubai UAE?",
    description:
      "A Parent(s) Residence Visa can be sponsored by Son/ Daughter/ Son in Law/ Daughter in Law in Dubai. If you ...",
  },
  {
    title: "Sponsoring your Husband or Wife in Dubai, UAE",
    description:
      "ALL YOU NEED TO KNOW ABOUT UAE FAMILY SPONSORSHIP Residents both employers and employees can sponsor their families in the UAE ...",
  },
  {
    title: "How to Sponsor New Born Child in UAE",
    description:
      "You need to apply for a UAE residence visa for a newborn baby within 120 days of his/her birth; otherwise, ...",
  },
];

const Newmain = () => {
  return (
    <div>
      <div className=' min-h-screen h-full w-full relative'>
        <div className='flex flex-wrap lg:h-screen lg:flex-row flex-col-reverse  justify-center items-center  relative mt-20 xl:mt-[6%] lg:mt-[4%] '>
            <div className='lg:w-2/6 w-full lg:bg-white bg-[#1A1B18] relative lg:top-[10%] space-y-4 lg:left-[10%] z-10 p-5'>
            <div className='border-l-[8px] border-black pl-10'>
                <div>
                    <h1 className='text-black md:font-bold font-semibold md:text-4xl text-2xl !text-2xl'>
                      FEATURED
                    </h1>
                </div>
            </div>
            <img alt="" loading="lazy" width="623" height="363" decoding="async" data-nimg="1" src="/assets/news1.svg" style={{color: 'transparent'}}/>
            <div>
                <h1 className='text-black md:font-bold font-semibold md:text-4xl text-2xl !text-grey1 p-4 !text-lg'>
                Stay Informed with the Latest News and Blogs for Seamless Journey
                </h1>
            </div>
            </div>
            <div className='lg:w-4/6 w-full bg-[#1A1B18] lg:h-screen flex flex-col justify-center md:py-20 items-center relative '>
            <div className='lg:block hidden '>
            <img alt="" loading="lazy" width="562" height="142" decoding="async" data-nimg="1" className="mx-auto" src="/assets/news2.svg" style={{color: 'transparent'}}/>
            </div>
            <div className='lg:w-1/2 mx-auto w-full'>
            <div className='w-full space-y-2 p-5 '>
                <p className='text-grey2 md:text-lg font-normal pb-2  '>
                    <span className='text-[#255A33]'>U</span>
                    <span className='text-white'>A</span>
                    <span className='text-[#CB2129]'>E </span>
                    Immigration Insights:
                </p>
                <div>
                    <h1 className=' md:font-bold font-semibold md:text-4xl text-2xl !text-xl text-grey2'>
                    UAE Immigration Insights: Stay Informed with the Latest News and Blogs for Seamless Journey
                    </h1>
                </div>
                <p className='text-grey2 md:text-lg font-normal pb-2 '>
                Stay connected to expert advice, success stories, and breaking news that can make your journey smoother and more informed. Your path to a new chapter begins here!"
                </p>
            </div>
            </div>
            </div>
            <div className='md:hidden block relative  w-full  bg-[#1A1B18] py-5'>
            <img alt="" loading="lazy" width="562" height="142" decoding="async" data-nimg="1" className="mx-auto w-1/2" src="/assets/news3.svg" style={{color: 'transparent'}}/>
            </div>
            <div className='absolute right-3 bottom-5'>
                <button className='md:flex hidden flex-col items-center justify-center gap-4 '>
                <img alt="" loading="lazy" width="10" height="183" decoding="async" data-nimg="1" className="w-1/5" src="/assets/SCROLL FOR MORE.be78176b.svg" style={{color: 'transparent'}}/>
                <img alt="" loading="lazy" width="60" height="240" decoding="async" data-nimg="1" className="w-3/4 hover:scale-105 transition-all divide-fuchsia-300" src="/assets/arrow.4a8a910a.svg" style={{color: 'transparent'}}/>
                </button>
             </div> 
        </div>
      </div>
      <div className='md:py-20 py-5 xl:px-32 lg:px-16 md:px-10 px-5 w-full flex flex-wrap justify-center items-center relative'>
        <div className='flex flex-wrap justify-center gap-5'>
        {divData.map((item, index) => (
        <div
          key={index}
          className="lg:w-[30%] md:w-[48%] w-full space-y-4 border-b-[.3rem] py-2 border-black"
        >
          <div className="bg-background py-10 px-5 text-xl font-semibold underline-offset-4 text-grey1 underline decoration-[#ff512f]">
            {item.title}
          </div>
          <div className="text-lg font-medium text-grey1 p-2">
            {item.description}
          </div>
          <div className="flex justify-between items-center">
            <p>{date}</p>
            <Link
              href={link}
              className="text-lg font-medium text-black flex gap-2 items-center border-l-4 pl-5 border-black"
            >
              <p>Read More</p>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.2312 6.88495C13.3523 6.78395 13.4921 6.70781 13.6426 6.66086C13.7931 6.61392 13.9514 6.5971 14.1084 6.61137C14.2655 6.62563 14.4181 6.6707 14.5577 6.744C14.6973 6.8173 14.8211 6.91739 14.922 7.03855L18.9216 11.8385C19.027 11.959 19.1072 12.0993 19.1575 12.2511C19.2079 12.403 19.2273 12.5635 19.2147 12.723C19.2022 12.8825 19.1578 13.0379 19.0843 13.18C19.0108 13.3221 18.9096 13.4481 18.7867 13.5505C18.6637 13.653 18.5216 13.7298 18.3685 13.7765C18.2155 13.8232 18.0546 13.8388 17.8955 13.8224C17.7363 13.806 17.582 13.7579 17.4417 13.681C17.3014 13.6041 17.1779 13.4999 17.0784 13.3745L13.0776 8.57455C12.874 8.33009 12.7758 8.01478 12.8046 7.69795C12.8334 7.38112 12.9869 7.08869 13.2312 6.88495Z"
                    fill="black"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.2312 18.328C12.9869 18.1243 12.8334 17.8318 12.8046 17.515C12.7758 17.1982 12.874 16.8829 13.0776 16.6384L17.0784 11.8384C17.1779 11.7131 17.3014 11.6089 17.4417 11.532C17.582 11.4551 17.7363 11.407 17.8955 11.3906C18.0546 11.3742 18.2155 11.3898 18.3685 11.4365C18.5216 11.4832 18.6637 11.56 18.7867 11.6624C18.9096 11.7648 19.0108 11.8908 19.0843 12.033C19.1578 12.1751 19.2022 12.3305 19.2147 12.49C19.2273 12.6495 19.2079 12.8099 19.1575 12.9618C19.1072 13.1137 19.027 13.254 18.9216 13.3744L14.922 18.1744C14.8211 18.2956 14.6973 18.3957 14.5577 18.469C14.4181 18.5423 14.2655 18.5873 14.1084 18.6016C13.9514 18.6158 13.7931 18.599 13.6426 18.5521C13.4921 18.5051 13.3523 18.429 13.2312 18.328Z"
                    fill="black"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.8 12.6067C16.8 12.925 16.6736 13.2302 16.4485 13.4553C16.2235 13.6803 15.9182 13.8067 15.6 13.8067L5.99999 13.8067C5.68173 13.8067 5.3765 13.6803 5.15146 13.4553C4.92642 13.2302 4.79999 12.925 4.79999 12.6067C4.79999 12.2885 4.92642 11.9833 5.15146 11.7582C5.3765 11.5332 5.68173 11.4067 5.99999 11.4067L15.6 11.4067C15.9182 11.4067 16.2235 11.5332 16.4485 11.7582C16.6736 11.9833 16.8 12.2885 16.8 12.6067Z"
                    fill="black"
                  ></path>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      ))}

        </div>

      </div>

    </div>
  )
}

export default Newmain
