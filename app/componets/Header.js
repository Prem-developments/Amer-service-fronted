'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  // State to track if the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState('');
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position

  // Toggle function to show/hide the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    setIsMenuOpen(false); // Optional: close menu after selecting a link
  };

  // Scroll detection to change the background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) { // Adjust scroll position to your preference
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={`py-6 lg:px-10 px-4 flex items-start fixed top-0 left-0 w-full z-20  ${
          isScrolled ? 'bg-[#f9f9f9]' : 'bg-transparent'
        }`}
      >
        <img src="/assets/side.svg" alt="" className='mt-5 lg:block hidden absolute' style={{ color: 'transparent' }} />
        <div className='md:px-20 md:pr-10 flex justify-between items-center flex-shrink-0 w-full'>
          <div className='flex gap-8 items-center md:border-b border-black pb-5'>
            <img src="/assets/logo.webp" alt="logo" loading="lazy" width={1541} height={597} className="w-52" />
            <div className='lg:flex hidden gap-5'>
              <li className='list-none'><Link href="/" className='text-black font-medium text-lg shrink'>Home</Link></li>
              <li className='list-none'><Link href="/pages/service" className='text-black font-medium text-lg shrink'>Services</Link></li>
              <li className='list-none'><Link href="/pages/about" className='text-black font-medium text-lg shrink'>About</Link></li>
              <li className='list-none'><Link href="/pages/contact" className='text-black font-medium text-lg shrink'>Contact</Link></li>
              <li className='list-none'><Link href="/pages/pricing" className='text-black font-medium text-lg shrink'>Price</Link></li>
              <li className='list-none'><Link href="/pages/news" className='text-black font-medium text-lg shrink'>News</Link></li>
            </div>
          </div>
          <div className='flex items-center gap-1 md:gap-3'>
            <Link href="/pages/uaevisa"><div className='text-white button-67-1 p-[14px] text-[14px] shrink xl:block hidden'>UAE TOURIST VISA</div></Link>
            <Link href="/pages/pricing/online-service"><div className='text-white button-67-1 p-[14px] text-[14px]  shrink xl:block hidden'>APPLY ONLINE</div></Link>
            <img src="/assets/logo1.webp" alt="logo" loading="lazy" width="1014" height="492" decoding="async" className="w-36" style={{ color: 'transparent' }} />
            <button className='pr-6 sm:pr-0 block' onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                <path d="M5.8006 28H38.8006M5.8006 17H38.8006" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <>
          {/* Background overlay for shadow */}
          <div className="bg-white fixed inset-0 h-full w-full md:blur-2xl blur-md z-20"></div>

          {/* Menu content */}
          <div className='h-screen w-full fixed opacity-90 top-0 left-0 z-50 flex justify-center items-center'>
            <div className='lg:px-32 md:px-16 px-5 md:py-16 py-5 absolute left-0 top-0 flex justify-between items-center w-full'>
              <h1 className='text-black font-semibold md:font-bold text-2xl md:text-4xl'>Menu</h1>
              <button onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 18 19" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M17.5664 2.0664C17.6408 1.99202 17.6998 1.90372 17.74 1.80653C17.7803 1.70935 17.801 1.60519 17.801 1.5C17.801 1.39481 17.7803 1.29065 17.74 1.19347C17.6998 1.09628 17.6408 1.00798 17.5664 0.9336C17.492 0.85922 17.4037 0.800218 17.3065 0.759963C17.2093 0.719709 17.1052 0.69899 17 0.69899C16.8948 0.69899 16.7906 0.719709 16.6935 0.759963C16.5963 0.800218 16.508 0.85922 16.4336 0.9336L8.99998 8.3688L1.56639 0.9336C1.492 0.85922 1.4037 0.800218 1.30652 0.759963C1.20934 0.719709 1.10518 0.69899 0.999985 0.69899C0.894795 0.69899 0.790635 0.719709 0.693452 0.759963C0.596269 0.800218 0.507966 0.85922 0.433585 0.9336C0.359204 1.00798 0.300203 1.09628 0.259948 1.19347C0.219693 1.29065 0.198975 1.39481 0.198975 1.5C0.198975 1.60519 0.219693 1.70935 0.259948 1.80653C0.300203 1.90372 0.359204 1.99202 0.433585 2.0664L7.86879 9.5L0.433585 16.9336C0.283366 17.0838 0.198975 17.2876 0.198975 17.5C0.198975 17.7124 0.283366 17.9162 0.433585 18.0664C0.583804 18.2166 0.787544 18.301 0.999985 18.301C1.21243 18.301 1.41617 18.2166 1.56639 18.0664L8.99998 10.6312L16.4336 18.0664C16.5838 18.2166 16.7875 18.301 17 18.301C17.2124 18.301 17.4162 18.2166 17.5664 18.0664C17.7166 17.9162 17.801 17.7124 17.801 17.5C17.801 17.2876 17.7166 17.0838 17.5664 16.9336L10.1312 9.5L17.5664 2.0664Z" fill="black"></path>
                </svg>
              </button>
            </div>
            <div className='lg:w-3/5 md:w-4/5 w-full flex items-center justify-center flex-wrap gap-2 md:gap-0 md:mt-32 mt-0 px-5'>
            <Link href="/"  onClick={() => handleLinkClick('/')}
                className={`${
                  selectedLink === '/' ? 'bg-[#ff512f] text-white' : 'text-black'
                } font-medium text-lg lg:w-1/5 md:w-2/6 w-[40%] flex justify-center items-center flex-col md:py-10  gap-2  md:border-transparent border-b-0 md:border-l-0 
                  ${
                    selectedLink !== '/' ? 'hover:bg-[#ff512f] hover:text-white' : ''
                  }`}>
        <div className="  [&amp;>svg>g>path]:fill-white [&amp;>svg>path]:fill-white "><div className="lg:w-full md:w-3/4 w-1/2"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="currentColor"><g clipPath="url(#clip0_30_89)"><path d="M48.75 60H38.75C38.06 60 37.5 59.44 37.5 58.75V41.25C37.5 40.56 36.94 40 36.25 40H23.75C23.06 40 22.5 40.56 22.5 41.25V58.75C22.5 59.44 21.94 60 21.25 60H11.25C9.1825 60 7.5 58.3175 7.5 56.25V32.5H2.5C1.1225 32.5 0 31.3775 0 30C0 29.3375 0.27 28.6875 0.74 28.2175L29.125 0.357501C29.61 -0.117499 30.39 -0.117499 30.875 0.357501L59.25 28.2075C59.73 28.6875 60 29.3375 60 30C60 31.3775 58.8775 32.5 57.5 32.5H52.5V56.25C52.5 58.3175 50.8175 60 48.75 60ZM40 57.5H48.75C49.44 57.5 50 56.94 50 56.25V31.25C50 30.56 50.56 30 51.25 30H57.5L30 3.0025L2.5 29.9925L8.75 30C9.44 30 10 30.56 10 31.25V56.25C10 56.94 10.56 57.5 11.25 57.5H20V41.25C20 39.1825 21.6825 37.5 23.75 37.5H36.25C38.3175 37.5 40 39.1825 40 41.25V57.5Z" fill="currentColor"></path></g><defs><clipPath id="clip0_30_89"><rect width="60" height="60"></rect></clipPath></defs></svg></div></div>
        <h1 className='md:text-lg text-sm font-medium text-center'>Home</h1>
        </Link>
        <Link href="/pages/about"   onClick={() => handleLinkClick('/pages/about')}
                className={`${
                  selectedLink === '/pages/about' ? 'bg-[#ff512f] text-white' : 'text-black'
                } font-medium text-lg lg:w-1/5 md:w-2/6 w-[40%] flex justify-center items-center flex-col md:py-10  gap-2 md:border-transparent border-b-0 md:border-l-0 
                  ${
                    selectedLink !== '/pages/about'
                      ? 'hover:bg-[#ff512f] hover:text-white'
                      : ''
                  }`}>
        <div class="  "><div class="lg:w-full md:w-3/4 w-1/2"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="currentColor"><g clipPath="url(#clip0_30_48)"><path d="M6.25 60C5.56 60 5 59.44 5 58.75V13C5 11.43 5.9925 10.015 7.4675 9.4775L33.3225 0.0750017C33.705 -0.0674983 34.1325 -0.00749826 34.4675 0.227502C34.8 0.460002 35 0.842502 35 1.25V23.75C35 24.44 34.44 25 33.75 25C33.06 25 32.5 24.44 32.5 23.75V3.035L8.3225 11.825C7.83 12.005 7.5 12.4775 7.5 13V58.75C7.5 59.44 6.94 60 6.25 60Z" fill="currentColor"></path><path d="M18.75 22.5H6.25C5.56 22.5 5 21.94 5 21.25C5 20.56 5.56 20 6.25 20H18.75C19.44 20 20 20.56 20 21.25C20 21.94 19.44 22.5 18.75 22.5Z" fill="currentColor"></path><path d="M18.75 32.5H6.25C5.56 32.5 5 31.94 5 31.25C5 30.56 5.56 30 6.25 30H18.75C19.44 30 20 30.56 20 31.25C20 31.94 19.44 32.5 18.75 32.5Z" fill="currentColor"></path><path d="M53.75 35H41.25C40.56 35 40 34.44 40 33.75C40 33.06 40.56 32.5 41.25 32.5H53.75C54.44 32.5 55 33.06 55 33.75C55 34.44 54.44 35 53.75 35Z" fill="currentColor"></path><path d="M53.75 45H41.25C40.56 45 40 44.44 40 43.75C40 43.06 40.56 42.5 41.25 42.5H53.75C54.44 42.5 55 43.06 55 43.75C55 44.44 54.44 45 53.75 45Z" fill="currentColor"></path><path d="M58.75 60H1.25C0.56 60 0 59.44 0 58.75C0 58.06 0.56 57.5 1.25 57.5H58.75C59.44 57.5 60 58.06 60 58.75C60 59.44 59.44 60 58.75 60Z" fill="currentColor"></path><path d="M53.75 60C53.06 60 52.5 59.44 52.5 58.75V26.25C52.5 25.5625 51.94 25 51.25 25H31.25C30.56 25 30 25.5625 30 26.25V58.75C30 59.44 29.44 60 28.75 60C28.06 60 27.5 59.44 27.5 58.75V26.25C27.5 24.1825 29.1825 22.5 31.25 22.5H51.25C53.3175 22.5 55 24.1825 55 26.25V58.75C55 59.44 54.44 60 53.75 60Z" fill="currentColor"></path></g><defs><clipPath id="clip0_30_48"><rect width="60" height="60" fill="currentColor"></rect></clipPath></defs></svg></div></div>
        <h1 className='md:text-lg text-sm font-medium text-center '>About</h1>
        </Link>
        <Link href="/pages/service"   onClick={() => handleLinkClick('/pages/service')}
                className={`${
                  selectedLink === '/pages/service' ? 'bg-[#ff512f] text-white' : 'text-black'
                } font-medium text-lg lg:w-1/5 md:w-2/6 w-[40%] flex justify-center items-center flex-col md:py-10  gap-2 md:border-transparent border-b-0 md:border-l-0 
                  ${
                    selectedLink !== '/pages/service'
                      ? 'hover:bg-[#ff512f] hover:text-white'
                      : ''
                  }`}>
        <div><div class="lg:w-full md:w-3/4 w-1/2"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="currentColor"><path fill-rule="evenodd" clipRule="evenodd" d="M49.3072 45.5575L43.75 48.614V54.8168C43.75 56.992 41.9052 58.7108 39.7355 58.5575L9.73548 56.436C7.77195 56.297 6.25 54.6638 6.25 52.6953V12.5215C6.25 11.9082 7.1853 8.35463 8.53085 8.53363L46.9014 1.7349C49.1816 1.36601 51.2501 3.12676 51.2501 5.43678V42.2718C51.2501 43.6395 50.5055 44.8985 49.3072 45.5575ZM40.0392 11.6478L8.74997 10.6646V52.6951C8.74997 53.3513 9.2573 53.8959 9.9118 53.9421L39.9118 56.0634C40.635 56.1146 41.2501 55.5416 41.2501 54.8166V12.8971C41.2501 12.2221 40.714 11.669 40.0392 11.6478Z" fill="#E0E0E0"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M25 18.75C18.7868 18.75 13.75 23.7868 13.75 30C13.75 36.2132 18.7868 41.25 25 41.25C31.2132 41.25 36.25 36.2132 36.25 30C36.25 23.7868 31.2132 18.75 25 18.75ZM11.25 30C11.25 22.4061 17.4061 16.25 25 16.25C32.594 16.25 38.75 22.4061 38.75 30C38.75 37.594 32.594 43.75 25 43.75C17.4061 43.75 11.25 37.594 11.25 30Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M23.5456 21.5203C22.9108 23.6365 22.5 26.6347 22.5 30C22.5 33.3652 22.9108 36.3635 23.5456 38.4797C23.8655 39.5457 24.2214 40.3172 24.5599 40.7945C24.7927 41.1227 24.9448 41.2172 25 41.2428C25.0553 41.2172 25.2072 41.1227 25.44 40.7945C25.7785 40.3172 26.1345 39.5457 26.4543 38.4797C27.0893 36.3635 27.5 33.3652 27.5 30C27.5 26.6347 27.0893 23.6365 26.4543 21.5203C26.1345 20.4543 25.7785 19.6827 25.44 19.2055C25.2072 18.8772 25.0553 18.7829 25 18.7573C24.9448 18.7829 24.7927 18.8772 24.5599 19.2055C24.2214 19.6827 23.8655 20.4543 23.5456 21.5203ZM22.5207 17.7592C23.0565 17.0038 23.8762 16.25 25 16.25C26.1238 16.25 26.9435 17.0038 27.4793 17.7592C28.038 18.547 28.4903 19.606 28.849 20.802C29.5713 23.2099 30 26.4615 30 30C30 33.5385 29.5713 36.79 28.849 39.198C28.4903 40.394 28.038 41.453 27.4793 42.2407C26.9435 42.9962 26.1238 43.75 25 43.75C23.8762 43.75 23.0565 42.9962 22.5207 42.2407C21.9619 41.453 21.5099 40.394 21.1511 39.198C20.4287 36.79 20 33.5385 20 30C20 26.4615 20.4287 23.2099 21.1511 20.802C21.5099 19.606 21.9619 18.547 22.5207 17.7592Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 30C11.25 29.3097 11.8096 28.75 12.5 28.75H37.5C38.1902 28.75 38.75 29.3097 38.75 30C38.75 30.6903 38.1902 31.25 37.5 31.25H12.5C11.8096 31.25 11.25 30.6903 11.25 30Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.0032 47.411C15.0524 46.7225 15.6505 46.204 16.3391 46.2533L33.8391 47.5033C34.5278 47.5525 35.0461 48.1505 34.9968 48.839C34.9478 49.5278 34.3496 50.046 33.6611 49.997L16.161 48.747C15.4724 48.6978 14.954 48.0995 15.0032 47.411Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 11.8732C6.25 9.75598 8.0016 8.05858 10.1178 8.12506L40.1178 9.06771C42.142 9.13131 43.75 10.7906 43.75 12.8159V54.7354C43.75 56.9106 41.9053 58.6296 39.7355 58.4761L9.73553 56.3546C7.772 56.2159 6.25005 54.5824 6.25005 52.6141L6.25 11.8732ZM10.0392 10.6238C9.33385 10.6017 8.75 11.1675 8.75 11.8732V52.614C8.75 53.27 9.25733 53.8145 9.91183 53.8607L39.9118 55.9822C40.6351 56.0335 41.2501 55.4605 41.2501 54.7352V12.8157C41.2501 12.1406 40.7141 11.5875 40.0393 11.5663L10.0392 10.6238Z" fill="currentColor"></path></svg></div></div>
        <h1 className='md:text-lg text-sm font-medium text-center '>Services</h1>
        </Link>
        <Link href="/pages/uae"   onClick={() => handleLinkClick('/pages/uae')}
                className={`${
                  selectedLink === '/pages/uae' ? 'bg-[#ff512f] text-white' : 'text-black'
                } font-medium text-lg lg:w-1/5 md:w-2/6 w-[40%] flex justify-center items-center flex-col md:py-10  gap-2 md:border-transparent border-b-0 md:border-l-0 
                  ${
                    selectedLink !== '/pages/uae'
                      ? 'hover:bg-[#ff512f] hover:text-white'
                      : ''
                  }`}>
        <div ><div className="lg:w-full md:w-3/4 w-1/2"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M8.75 5C8.75 2.92893 10.4289 1.25 12.5 1.25H47.5C49.571 1.25 51.25 2.92893 51.25 5V55C51.25 57.071 49.571 58.75 47.5 58.75H12.5C10.4289 58.75 8.75 57.071 8.75 55V5ZM12.5 3.75C11.8096 3.75 11.25 4.30965 11.25 5V55C11.25 55.6903 11.8096 56.25 12.5 56.25H47.5C48.1903 56.25 48.75 55.6903 48.75 55V5C48.75 4.30965 48.1903 3.75 47.5 3.75H12.5Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.75 50C18.75 49.3097 19.3097 48.75 20 48.75H40C40.6903 48.75 41.25 49.3097 41.25 50C41.25 50.6903 40.6903 51.25 40 51.25H20C19.3097 51.25 18.75 50.6903 18.75 50Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21.25 42.5C21.25 41.8097 21.8097 41.25 22.5 41.25H37.5C38.1903 41.25 38.75 41.8097 38.75 42.5C38.75 43.1903 38.1903 43.75 37.5 43.75H22.5C21.8097 43.75 21.25 43.1903 21.25 42.5Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M30 8.75C23.7868 8.75 18.75 13.7868 18.75 20C18.75 26.2132 23.7868 31.25 30 31.25C36.2132 31.25 41.25 26.2132 41.25 20C41.25 13.7868 36.2132 8.75 30 8.75ZM16.25 20C16.25 12.4061 22.4061 6.25 30 6.25C37.594 6.25 43.75 12.4061 43.75 20C43.75 27.594 37.594 33.75 30 33.75C22.4061 33.75 16.25 27.594 16.25 20Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M30.4108 14.0333L22.0946 11.182L22.9054 8.81715L31.2218 11.6684C33.9813 12.6146 34.6513 16.2108 32.4175 18.0871L31.1155 19.1807C30.7068 19.5242 30.229 19.7764 29.7148 19.9204L26.959 20.692C26.419 20.8432 26.046 21.3352 26.046 21.8957V22.169C26.046 22.3941 26.1068 22.6149 26.2218 22.8083L27.1368 24.3457C28.1995 26.1308 27.6083 28.4393 25.8188 29.4943L23.1348 31.0765L21.8652 28.9228L24.5493 27.3405C25.1458 26.989 25.3428 26.2195 24.9887 25.6243L24.0736 24.087C23.7282 23.5069 23.5459 22.8442 23.5459 22.169V21.8957C23.5459 20.2141 24.6654 18.738 26.2848 18.2846L29.0408 17.513C29.212 17.465 29.3713 17.3809 29.5078 17.2664L30.8095 16.1729C31.554 15.5474 31.3308 14.3487 30.4108 14.0333Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M37.4639 21.0207L42.3404 19.9952L41.7981 17.514L36.9219 18.5395C35.9194 18.7502 35.0561 19.381 34.5384 20.2808L32.4234 23.957C31.3389 25.842 32.0631 28.3083 33.9976 29.3168L36.9361 30.849L38.0179 28.5963L35.0791 27.064C34.4344 26.7278 34.1929 25.9055 34.5544 25.2773L36.6696 21.6011C36.8421 21.3012 37.1299 21.0909 37.4639 21.0207Z" fill="currentColor"></path></svg></div></div>
        <h1 className='md:text-lg text-sm font-medium text-center '>UAE Tourist Visa</h1>
        </Link>
        <Link href="/pages/pricing"   onClick={() => handleLinkClick('/pages/pricing')}
                className={`${
                  selectedLink === '/pages/pricing' ? 'bg-[#ff512f] text-white' : 'text-black'
                } font-medium text-lg lg:w-1/5 md:w-2/6 w-[40%] flex justify-center items-center flex-col md:py-10  gap-2 md:border-transparent border-b-0 md:border-l-0 
                  ${
                    selectedLink !== '/pages/pricing'
                      ? 'hover:bg-[#ff512f] hover:text-white'
                      : ''
                  }`}>
        <div class="  [&amp;>svg>g>path]:fill-white [&amp;>svg>path]:fill-white "><div class="lg:w-full md:w-3/4 w-1/2"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="currentColor"><g clip-path="url(#clip0_30_15)"><path d="M43.75 53.75C43.06 53.75 42.5 53.19 42.5 52.5V50C42.5 49.31 43.06 48.75 43.75 48.75C44.44 48.75 45 49.31 45 50V52.5C45 53.19 44.44 53.75 43.75 53.75Z" fill="currentColor"></path><path d="M44.375 51.25H40C39.31 51.25 38.75 50.69 38.75 50C38.75 49.31 39.31 48.75 40 48.75H44.375C45.41 48.75 46.25 47.9075 46.25 46.875C46.25 45.8425 45.41 45 44.375 45H43.125C40.7125 45 38.75 43.0375 38.75 40.625C38.75 38.2125 40.7125 36.25 43.125 36.25H47.5C48.19 36.25 48.75 36.81 48.75 37.5C48.75 38.19 48.19 38.75 47.5 38.75H43.125C42.09 38.75 41.25 39.5925 41.25 40.625C41.25 41.6575 42.09 42.5 43.125 42.5H44.375C46.7875 42.5 48.75 44.4625 48.75 46.875C48.75 49.2875 46.7875 51.25 44.375 51.25Z" fill="currentColor"></path><path d="M43.75 38.75C43.06 38.75 42.5 38.19 42.5 37.5V35C42.5 34.31 43.06 33.75 43.75 33.75C44.44 33.75 45 34.31 45 35V37.5C45 38.19 44.44 38.75 43.75 38.75Z" fill="currentColor"></path><path d="M43.75 60C34.79 60 27.5 52.71 27.5 43.75C27.5 34.79 34.79 27.5 43.75 27.5C52.71 27.5 60 34.79 60 43.75C60 52.71 52.71 60 43.75 60ZM43.75 30C36.1675 30 30 36.17 30 43.75C30 51.33 36.1675 57.5 43.75 57.5C51.3325 57.5 57.5 51.33 57.5 43.75C57.5 36.17 51.3325 30 43.75 30Z" fill="currentColor"></path><path d="M21.25 52.5H6.25C2.805 52.5 0 49.6975 0 46.25V6.25C0 2.805 2.805 0 6.25 0H33.75C37.195 0 40 2.805 40 6.25V21.25C40 21.94 39.44 22.5 38.75 22.5C38.06 22.5 37.5 21.94 37.5 21.25V6.25C37.5 4.1825 35.8175 2.5 33.75 2.5H6.25C4.1825 2.5 2.5 4.1825 2.5 6.25V46.25C2.5 48.3175 4.1825 50 6.25 50H21.25C21.94 50 22.5 50.56 22.5 51.25C22.5 51.94 21.94 52.5 21.25 52.5Z" fill="currentColor"></path><path d="M23.75 34.725C23.06 34.725 22.5 34.165 22.5 33.475V13.75C22.5 13.06 23.06 12.5 23.75 12.5H31.25C31.94 12.5 32.5 13.06 32.5 13.75V25.05C32.5 25.74 31.94 26.3 31.25 26.3C30.56 26.3 30 25.74 30 25.05V15H25V33.475C25 34.165 24.44 34.725 23.75 34.725Z" fill="currentColor"></path><path d="M16.25 37.5H8.75C8.06 37.5 7.5 36.94 7.5 36.25V23.75C7.5 23.06 8.06 22.5 8.75 22.5H16.25C16.94 22.5 17.5 23.06 17.5 23.75V36.25C17.5 36.94 16.94 37.5 16.25 37.5ZM10 35H15V25H10V35Z" fill="currentColor"></path><path d="M22.55 37.5H6.25C5.56 37.5 5 36.94 5 36.25C5 35.56 5.56 35 6.25 35H22.55C23.24 35 23.8 35.56 23.8 36.25C23.8 36.94 23.24 37.5 22.55 37.5Z" fill="currentColor"></path></g><defs><clipPath id="clip0_30_15"><rect width="60" height="60" fill="white"></rect></clipPath></defs></svg></div></div>
        <h1 className='md:text-lg text-sm font-medium text-center '>Pricing</h1>
        </Link>
        <Link href="/pages/news"   onClick={() => handleLinkClick('/pages/news')}
                className={`${
                  selectedLink === '/pages/news' ? 'bg-[#ff512f] text-white' : 'text-black'
                } font-medium text-lg lg:w-1/5 md:w-2/6 w-[40%] flex justify-center items-center flex-col md:py-10  gap-2 md:border-transparent border-b-0 md:border-l-0 
                  ${
                    selectedLink !== '/pages/news'
                      ? 'hover:bg-[#ff512f] hover:text-white'
                      : ''
                  }`}>
        <div class="  "><div className="lg:w-full md:w-3/4 w-1/2"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="currentColor"><g clipPath="url(#clip0_30_25)"><path d="M51.25 60H8.75C3.925 60 0 56.075 0 51.25V6.25C0 2.805 2.805 0 6.25 0H38.75C42.195 0 45 2.805 45 6.25V7.5H53.75C57.195 7.5 60 10.305 60 13.75V51.25C60 56.075 56.075 60 51.25 60ZM45 10V51.25C45 54.695 47.805 57.5 51.25 57.5C54.695 57.5 57.5 54.695 57.5 51.25V13.75C57.5 11.6825 55.8175 10 53.75 10H45ZM6.25 2.5C4.1825 2.5 2.5 4.1825 2.5 6.25V51.25C2.5 54.695 5.305 57.5 8.75 57.5H45.1325C43.5075 55.91 42.5 53.6975 42.5 51.25V6.25C42.5 4.1825 40.8175 2.5 38.75 2.5H6.25Z" fill="currentColor"></path><path d="M21.25 22.5H8.75C8.06 22.5 7.5 21.94 7.5 21.25V8.75C7.5 8.06 8.06 7.5 8.75 7.5H21.25C21.94 7.5 22.5 8.06 22.5 8.75V21.25C22.5 21.94 21.94 22.5 21.25 22.5ZM10 20H20V10H10V20Z" fill="currentColor"></path><path d="M36.25 12.5H28.75C28.06 12.5 27.5 11.94 27.5 11.25C27.5 10.56 28.06 10 28.75 10H36.25C36.94 10 37.5 10.56 37.5 11.25C37.5 11.94 36.94 12.5 36.25 12.5Z" fill="currentColor"></path><path d="M36.25 20H28.75C28.06 20 27.5 19.44 27.5 18.75C27.5 18.06 28.06 17.5 28.75 17.5H36.25C36.94 17.5 37.5 18.06 37.5 18.75C37.5 19.44 36.94 20 36.25 20Z" fill="currentColor"></path><path d="M36.25 30H8.75C8.06 30 7.5 29.44 7.5 28.75C7.5 28.06 8.06 27.5 8.75 27.5H36.25C36.94 27.5 37.5 28.06 37.5 28.75C37.5 29.44 36.94 30 36.25 30Z" fill="currentColor"></path><path d="M36.25 40H8.75C8.06 40 7.5 39.44 7.5 38.75C7.5 38.06 8.06 37.5 8.75 37.5H36.25C36.94 37.5 37.5 38.06 37.5 38.75C37.5 39.44 36.94 40 36.25 40Z" fill="currentColor"></path><path d="M36.25 50H8.75C8.06 50 7.5 49.44 7.5 48.75C7.5 48.06 8.06 47.5 8.75 47.5H36.25C36.94 47.5 37.5 48.06 37.5 48.75C37.5 49.44 36.94 50 36.25 50Z" fill="currentColor"></path></g><defs><clipPath id="clip0_30_25"><rect width="60" height="60" fill="white"></rect></clipPath></defs></svg></div></div>
        <h1 className='md:text-lg text-sm font-medium text-center '>News</h1>
        </Link>
        <Link href="/pages/online"   onClick={() => handleLinkClick('/pages/online')}
                className={`${
                  selectedLink === '/pages/online' ? 'bg-[#ff512f] text-white' : 'text-black'
                } font-medium text-lg lg:w-1/5 md:w-2/6 w-[40%] flex justify-center items-center flex-col md:py-10  gap-2 md:border-transparent border-b-0 md:border-l-0 
                  ${
                    selectedLink !== '/pages/online'
                      ? 'hover:bg-[#ff512f] hover:text-white'
                      : ''
                  }`}>
       <div class="  "><div className="lg:w-full md:w-3/4 w-1/2"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M49.3072 45.5575L43.75 48.614V54.8167C43.75 56.992 41.9052 58.7107 39.7355 58.5575L9.73548 56.436C7.77195 56.297 6.25 54.6637 6.25 52.6952V12.5215C6.25 11.9082 7.1853 8.35461 8.53085 8.53361L46.9014 1.73489C49.1816 1.366 51.2501 3.12674 51.2501 5.43676V42.2718C51.2501 43.6395 50.5055 44.8985 49.3072 45.5575ZM40.0392 11.6477L8.74997 10.6646V52.6951C8.74997 53.3513 9.2573 53.8958 9.9118 53.9421L39.9118 56.0633C40.635 56.1146 41.2501 55.5416 41.2501 54.8166V12.8971C41.2501 12.222 40.714 11.6689 40.0392 11.6477Z" fill="#E0E0E0"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M25 18.75C18.7868 18.75 13.75 23.7868 13.75 30C13.75 36.2132 18.7868 41.25 25 41.25C31.2132 41.25 36.25 36.2132 36.25 30C36.25 23.7868 31.2132 18.75 25 18.75ZM11.25 30C11.25 22.4061 17.4061 16.25 25 16.25C32.594 16.25 38.75 22.4061 38.75 30C38.75 37.594 32.594 43.75 25 43.75C17.4061 43.75 11.25 37.594 11.25 30Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M23.5456 21.5203C22.9108 23.6365 22.5 26.6347 22.5 30C22.5 33.3652 22.9108 36.3635 23.5456 38.4797C23.8655 39.5457 24.2214 40.3172 24.5599 40.7945C24.7927 41.1227 24.9448 41.2172 25 41.2428C25.0553 41.2172 25.2072 41.1227 25.44 40.7945C25.7785 40.3172 26.1345 39.5457 26.4543 38.4797C27.0893 36.3635 27.5 33.3652 27.5 30C27.5 26.6347 27.0893 23.6365 26.4543 21.5203C26.1345 20.4543 25.7785 19.6827 25.44 19.2055C25.2072 18.8772 25.0553 18.7829 25 18.7573C24.9448 18.7829 24.7927 18.8772 24.5599 19.2055C24.2214 19.6827 23.8655 20.4543 23.5456 21.5203ZM22.5207 17.7592C23.0565 17.0038 23.8762 16.25 25 16.25C26.1238 16.25 26.9435 17.0038 27.4793 17.7592C28.038 18.547 28.4903 19.606 28.849 20.802C29.5713 23.2099 30 26.4615 30 30C30 33.5385 29.5713 36.79 28.849 39.198C28.4903 40.394 28.038 41.453 27.4793 42.2407C26.9435 42.9962 26.1238 43.75 25 43.75C23.8762 43.75 23.0565 42.9962 22.5207 42.2407C21.9619 41.453 21.5099 40.394 21.1511 39.198C20.4287 36.79 20 33.5385 20 30C20 26.4615 20.4287 23.2099 21.1511 20.802C21.5099 19.606 21.9619 18.547 22.5207 17.7592Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 30C11.25 29.3097 11.8096 28.75 12.5 28.75H37.5C38.1902 28.75 38.75 29.3097 38.75 30C38.75 30.6903 38.1902 31.25 37.5 31.25H12.5C11.8096 31.25 11.25 30.6903 11.25 30Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.0032 47.411C15.0524 46.7225 15.6505 46.204 16.3391 46.2532L33.8391 47.5032C34.5278 47.5525 35.0461 48.1505 34.9968 48.839C34.9478 49.5277 34.3496 50.046 33.6611 49.997L16.161 48.747C15.4724 48.6977 14.954 48.0995 15.0032 47.411Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 11.8732C6.25 9.75595 8.0016 8.05855 10.1178 8.12503L40.1178 9.06768C42.142 9.13128 43.75 10.7906 43.75 12.8158V54.7353C43.75 56.9106 41.9053 58.6296 39.7355 58.4761L9.73553 56.3546C7.772 56.2158 6.25005 54.5823 6.25005 52.6141L6.25 11.8732ZM10.0392 10.6238C9.33385 10.6016 8.75 11.1675 8.75 11.8732V52.6139C8.75 53.2699 9.25733 53.8144 9.91183 53.8607L39.9118 55.9822C40.6351 56.0334 41.2501 55.4604 41.2501 54.7352V12.8157C41.2501 12.1406 40.7141 11.5875 40.0393 11.5663L10.0392 10.6238Z" fill="currentColor"></path></svg></div></div>
        <h1 className='md:text-lg text-sm font-medium text-center '>Online</h1>
        </Link>
        <Link href="/pages/career"   onClick={() => handleLinkClick('/pages/career')}
                className={`${
                  selectedLink === '/pages/career' ? 'bg-[#ff512f] text-white' : 'text-black'
                } font-medium text-lg lg:w-1/5 md:w-2/6 w-[40%] flex justify-center items-center flex-col md:py-10  gap-2 md:border-transparent border-b-0 md:border-l-0 
                  ${
                    selectedLink !== '/pages/career'
                      ? 'hover:bg-[#ff512f] hover:text-white'
                      : ''
                  }`}>
       <div class="  "><div class="lg:w-full md:w-3/4 w-1/2"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="currentColor"><path d="M53.75 55H6.25C2.75 55 0 52.25 0 48.75V18.75C0 15.25 2.75 12.5 6.25 12.5H53.75C57.25 12.5 60 15.25 60 18.75V48.75C60 52.25 57.25 55 53.75 55ZM6.25 15C4.25 15 2.5 16.75 2.5 18.75V48.75C2.5 50.75 4.25 52.5 6.25 52.5H53.75C55.75 52.5 57.5 50.75 57.5 48.75V18.75C57.5 16.75 55.75 15 53.75 15H6.25Z" fill="currentColor"></path><path d="M38.75 15C38 15 37.5 14.5 37.5 13.75V8.75C37.5 8 37 7.5 36.25 7.5H23.75C23 7.5 22.5 8 22.5 8.75V13.75C22.5 14.5 22 15 21.25 15C20.5 15 20 14.5 20 13.75V8.75C20 6.75 21.75 5 23.75 5H36.25C38.25 5 40 6.75 40 8.75V13.75C40 14.5 39.5 15 38.75 15Z" fill="currentColor"></path><path d="M58.75 30H1.25C0.5 30 0 29.5 0 28.75C0 28 0.5 27.5 1.25 27.5H58.75C59.5 27.5 60 28 60 28.75C60 29.5 59.5 30 58.75 30Z" fill="currentColor"></path><path d="M16.25 35.5C15.5 35.5 15 35 15 34.25V23.75C15 23 15.5 22.5 16.25 22.5C17 22.5 17.5 23 17.5 23.75V34.25C17.5 34.75 17 35.5 16.25 35.5Z" fill="currentColor"></path><path d="M43.75 35.5C43 35.5 42.5 35 42.5 34.25V23.75C42.5 23 43 22.5 43.75 22.5C44.5 22.5 45 23 45 23.75V34.25C45 34.75 44.5 35.5 43.75 35.5Z" fill="currentColor"></path></svg></div></div>
        <h1 className='md:text-lg text-sm font-medium text-center '>Career</h1>
        </Link>
        <Link href="/pages/contact"   onClick={() => handleLinkClick('/pages/contact')}
                className={`${
                  selectedLink === '/pages/contact' ? 'bg-[#ff512f] text-white' : 'text-black'
                } font-medium text-lg lg:w-1/5 md:w-2/6 w-[40%] flex justify-center items-center flex-col md:py-10  gap-2 md:border-transparent border-b-0 md:border-l-0 
                  ${
                    selectedLink !== '/pages/contact'
                      ? 'hover:bg-[#ff512f] hover:text-white'
                      : ''
                  }`}>
       <div class="  "><div class="lg:w-full md:w-3/4 w-1/2"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="currentColor"><g clip-path="url(#clip0_30_48)"><path d="M6.25 60C5.56 60 5 59.44 5 58.75V13C5 11.43 5.9925 10.015 7.4675 9.4775L33.3225 0.0750017C33.705 -0.0674983 34.1325 -0.00749826 34.4675 0.227502C34.8 0.460002 35 0.842502 35 1.25V23.75C35 24.44 34.44 25 33.75 25C33.06 25 32.5 24.44 32.5 23.75V3.035L8.3225 11.825C7.83 12.005 7.5 12.4775 7.5 13V58.75C7.5 59.44 6.94 60 6.25 60Z" fill="currentColor"></path><path d="M18.75 22.5H6.25C5.56 22.5 5 21.94 5 21.25C5 20.56 5.56 20 6.25 20H18.75C19.44 20 20 20.56 20 21.25C20 21.94 19.44 22.5 18.75 22.5Z" fill="currentColor"></path><path d="M18.75 32.5H6.25C5.56 32.5 5 31.94 5 31.25C5 30.56 5.56 30 6.25 30H18.75C19.44 30 20 30.56 20 31.25C20 31.94 19.44 32.5 18.75 32.5Z" fill="currentColor"></path><path d="M53.75 35H41.25C40.56 35 40 34.44 40 33.75C40 33.06 40.56 32.5 41.25 32.5H53.75C54.44 32.5 55 33.06 55 33.75C55 34.44 54.44 35 53.75 35Z" fill="currentColor"></path><path d="M53.75 45H41.25C40.56 45 40 44.44 40 43.75C40 43.06 40.56 42.5 41.25 42.5H53.75C54.44 42.5 55 43.06 55 43.75C55 44.44 54.44 45 53.75 45Z" fill="currentColor"></path><path d="M58.75 60H1.25C0.56 60 0 59.44 0 58.75C0 58.06 0.56 57.5 1.25 57.5H58.75C59.44 57.5 60 58.06 60 58.75C60 59.44 59.44 60 58.75 60Z" fill="currentColor"></path><path d="M53.75 60C53.06 60 52.5 59.44 52.5 58.75V26.25C52.5 25.5625 51.94 25 51.25 25H31.25C30.56 25 30 25.5625 30 26.25V58.75C30 59.44 29.44 60 28.75 60C28.06 60 27.5 59.44 27.5 58.75V26.25C27.5 24.1825 29.1825 22.5 31.25 22.5H51.25C53.3175 22.5 55 24.1825 55 26.25V58.75C55 59.44 54.44 60 53.75 60Z" fill="currentColor"></path></g><defs><clipPath id="clip0_30_48"><rect width="60" height="60" fill="currentColor"></rect></clipPath></defs></svg></div></div>
        <h1 className='md:text-lg text-sm font-medium text-center '>Contact</h1>
        </Link>
        <Link href="/pages/pcr"   onClick={() => handleLinkClick('/pages/pcr')}
                className={`${
                  selectedLink === '/pages/pcr' ? 'bg-[#ff512f] text-white' : 'text-black'
                } font-medium text-lg lg:w-1/5 md:w-2/6 w-[40%] flex justify-center items-center flex-col md:py-10  gap-2 md:border-transparent border-b-0 md:border-l-0 
                  ${
                    selectedLink !== '/pages/pcr'
                      ? 'hover:bg-[#ff512f] hover:text-white'
                      : ''
                  }`}>
     <div class="  "><div class="lg:w-full md:w-3/4 w-1/2"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.3379 17.4437C16.4057 16.766 16.9759 16.25 17.6569 16.25H57.4241C57.7987 16.25 58.1555 16.4084 58.4068 16.6861C58.6582 16.9638 58.7804 17.3348 58.743 17.7075L56.0919 44.2192C56.0243 44.8968 55.454 45.4127 54.7729 45.4127H15.0058C14.6313 45.4127 14.2742 45.2542 14.0229 44.9766C13.7716 44.699 13.6495 44.3279 13.6868 43.9551L16.3379 17.4437ZM18.8565 18.9011L16.4705 42.7614H53.5733L55.9593 18.9011H18.8565Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5038 16.9223C16.8648 16.2853 17.6737 16.0616 18.3106 16.4225L37.5407 27.3196L56.7708 16.4225C57.4076 16.0616 58.2167 16.2853 58.5776 16.9223C58.9384 17.5592 58.7146 18.3682 58.0778 18.7291L38.1942 29.9964C37.7889 30.226 37.2926 30.226 36.8872 29.9964L17.0036 18.7291C16.3666 18.3682 16.1429 17.5592 16.5038 16.9223Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 20.2267C1.75 20.9588 2.34349 21.5523 3.07557 21.5523H17.6569C18.389 21.5523 18.9824 20.9588 18.9824 20.2267C18.9824 19.4946 18.389 18.9011 17.6569 18.9011H3.07557C2.34349 18.9011 1.75 19.4946 1.75 20.2267Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.40112 30.8312C4.40112 31.5632 4.99461 32.1568 5.7267 32.1568H16.3313C17.0634 32.1568 17.6568 31.5632 17.6568 30.8312C17.6568 30.0992 17.0634 29.5056 16.3313 29.5056H5.7267C4.99461 29.5056 4.40112 30.0992 4.40112 30.8312Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.37793 41.436C8.37793 42.168 8.97141 42.7616 9.7035 42.7616H15.0058C15.7379 42.7616 16.3314 42.168 16.3314 41.436C16.3314 40.704 15.7379 40.1104 15.0058 40.1104H9.7035C8.97141 40.1104 8.37793 40.704 8.37793 41.436Z" fill="currentColor"></path></svg></div></div>
        <h1 className='md:text-lg text-sm font-medium text-center '>PCR Test</h1>
        </Link>
            </div>
          </div>
        </>
      )}
      
    </div>
  );
};

export default Header;
