'use client'
import React, { useState } from 'react';
import './Contact.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    { question: "Are you open 24 hours?", answer: "We are open 24 hours except on Fridays from 12-02.30 PM." },
    { question: "⁠Do we have services related to visas issued from Sharjah or other Emirates?", answer: "Our primary services are for Dubai visas only." },
    { question: "Labor cancelation is required for a family hold?", answer: "No,The cancellation from Labor (MOHRE) is not Mandatory to hold Family." },
    { question: "Salary required to sponsor wife, children & parents?", answer: "The Salary required to Sponsor Spouse and Children is AED 4000,For parents AED 10000." },
    { question: "⁠Does the customer have to visit the same medical Centre or any DHA-approved medical Centres to complete the medical?", answer: "Customers can visit any DHA-approved medical centre." },
    { question: "Do you have services for Free zone and Domestic Worker visa?", answer: "We have services only for Medical, and Emirates ID applications for a Dubai Free zone /Domestic Worker visa" },
    { question: "What are the different types of Tourist or visit visas available?", answer: "A tourist visa is available for 30 and 60 days and a sponsored family visit visa for 30 and 90 days" },
    { question: "Is a visa stamping application required?", answer: "Yes, it has to be applied for the residence visa to be issued, But no more physical stamping of a visa into a passport is to be done" },
    { question: "Can I hold my Dependents visa If the Job offered from other Emirates?", answer: "No, the sponsor can hold dependents visas while change job within Dubai only" },
    { question: "Are there any VIP/Express services for any application?", answer: "No express services except for medical application" },
    { question: "Should the applicants be inside the UAE to apply for a Golden Visa?", answer: "Yes, the applicant MUST be in the UAE." },
    { question: "Can I travel without applying for the visa stamping application?", answer: "No, the applicant must complete the visa stamping application for he/she to travel." },
    { question: "Do I have to apply for the Emirates ID after getting a Golden Visa?", answer: "Yes, you have to apply for the Golden Emirates ID application after the issuance of your Golden Visa" },
    { question: "Do I have to apply for a family hold while applying for a Golden Visa?", answer: "No, it is an automatic process from the GDRFA to hold the dependent's visa while applying for a Golden Visa." },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='md:py-40 py-5 xl:px-32 lg:px-16 md:px-10 px-5 w-full items-center relative'>
      <div>
        <h1 className='text-black md:font-bold font-semibold md:text-4xl text-2xl'>
          Frequently Asked Questions
        </h1>
      </div>
      <div className='py-10'>
        {faqData.map((faq, index) => (
          <div key={index} className='faq-item'>
            <button
              className='faq-item w-full text-left'
              onClick={() => toggleFaq(index)}
            >
              <div
                className={`md:text-xl text-md font-semibold py-3 items-center text-left flex gap-5 question ${
                  activeIndex === index ? 'text-black' : 'text-[#4d4d4d]'
                }`}
              >
                {activeIndex === index ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M31.6668 21.6667H8.3335V18.3334H31.6668V21.6667Z" fill="black"></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M31.6668 21.6633H21.6668V31.6633H18.3335V21.6633H8.3335V18.33H18.3335V8.32996H21.6668V18.33H31.6668V21.6633Z" fill="#4D4D4D"></path>
                  </svg>
                )}
                {faq.question}
              </div>
            </button>
            {activeIndex === index && (
              <p className='faq-answer question duration-300 transition-all text-grey1 text-lg font-normal md:pr-5 pl-16 py-5'>
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
