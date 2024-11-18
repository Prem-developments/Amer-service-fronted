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
import Firstbutton from './Firstbutton';

const Example = () => {
  const [activeButton, setActiveButton] = useState(0); // Default the first button as active
 

  // Data for the buttons
  const buttons = [
    { id: 0, label: 'AMER SERVICE', svg: '<svg>...</svg>' },
    { id: 1, label: 'SERVICE TWO', svg: '<svg>...</svg>' },
    { id: 2, label: 'SERVICE THREE', svg: '<svg>...</svg>' },
    { id: 3, label: 'SERVICE FOUR', svg: '<svg>...</svg>' },
    { id: 4, label: 'SERVICE FIVE', svg: '<svg>...</svg>' },
    { id: 5, label: 'SERVICE SIX', svg: '<svg>...</svg>' },
  ];

  // Data for the options with 14 divs, including the "More" and "Less" labels
  
  const handleMoreLessToggle = () => {
    setShowAll((prev) => !prev); // Toggle the showAll state
  };

  

  return (
    <div>
       {/* Button Section */}
       <div className="md:py-20 py-5 xl:px-32 lg:px-16 md:px-10 px-5 w-full flex flex-wrap justify-center items-center relative">
        <div className="flex flex-wrap justify-center items-stretch w-full gap-3 md:gap-5">
          {buttons.map((button) => (
            <button
              key={button.id}
              onClick={() => setActiveButton(button.id)} // Set active button
              className={`md:w-[15%] w-[45%] border shadow-lg rounded-lg flex justify-center items-center flex-col py-8 gap-2 px-2 ${
                activeButton === button.id
                  ? 'card1  text-white' // Apply active styles
                  : 'text-black'
              }`}
            >
              <div dangerouslySetInnerHTML={{ __html: button.svg }} /> {/* Render SVG */}
              <div className="md:text-lg text-md font-medium text-center">
                {button.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Render the component conditionally */}
      

     
    </div>
  );
};

export default Example;
