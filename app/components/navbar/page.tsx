'use client'
import React, { useState } from 'react'

// import Link from 'next/link'

import Link from 'next/link'; // Import Link from react-scroll


import Image from 'next/image'



import upwork from '@/public/free-upwork-3445938-2878870.webp'
import SmoothScroll from '../SmoothScroll'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className='fixed top-0 left-0 right-0 z-[100] bg-[#F8F7F1] font-Poppins text-[16px] h-[5rem] flex items-center justify-center'>
        <div className="container m-auto md:px-9 px-4 flex items-center justify-between">
          <Link href='/'><h2 className='font-Crafty text-2xl cursor-pointer'>Suhaib .dev</h2></Link>
          <button onClick={toggleMenu} className="md:hidden block">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <ul className={`md:flex items-center justify-center gap-3 text-xs ${isOpen ? 'flex flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-[#F8F7F1] px-4 py-2' : 'hidden'}`}>
            <li className='hover:border-x-2 cursor-pointer transition-all duration-100 border-gray-900 rounded-full px-2 hover:text-[#14A800] hover:border-[#14A800]'>
              <SmoothScroll to='section1'>SERVICES</SmoothScroll>
            </li>
            <li className='hover:border-x-2 cursor-pointer transition-all duration-100 border-gray-900 rounded-full px-2 hover:text-[#14A800] hover:border-[#14A800]'>
              <SmoothScroll to='section2'>EXPERIENCE</SmoothScroll>
            </li>
            <li className='hover:border-x-2 cursor-pointer transition-all duration-100 border-gray-900 rounded-full px-2 hover:text-[#14A800] hover:border-[#14A800]'>
              <SmoothScroll to='section3'>PROJECTS</SmoothScroll>
            </li>
            <li className='hover:border-x-2 cursor-pointer transition-all duration-100 border-gray-900 rounded-full px-2 hover:text-[#14A800] hover:border-[#14A800]'>
              <SmoothScroll to='section4'>REVIEWS</SmoothScroll>
            </li>
            <li>
              <div className='block md:hidden mb-3'>
                <Link href="https://www.upwork.com/freelancers/suhaibinsari" target='_blank' className='border rounded-full bg-white hover:bg-[#14A800] shadow-md w-24 h-11 flex items-center justify-center gap-1 transition duration-300'>
                  <p className='font-medium text-black'>VISIT</p>
                  <Image src={upwork} alt='no-img' width={25} height={25} className='mt-[0.2rem]' />
                </Link>
              </div>
            </li>
          </ul>

          <div className='hidden md:block' >
            <Link href="https://www.upwork.com/freelancers/suhaibinsari" target='_blank' className='border rounded-full bg-white hover:bg-[#14A800] shadow-lg w-11 h-11 flex items-center justify-center transition duration-300' >
              <Image src={upwork} alt='no-img' width={30} height={30} className='mt-[0.2rem]' />
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar