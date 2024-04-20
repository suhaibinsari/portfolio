'use client'
import React, { useState } from 'react'

import Link from 'next/link';

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
                <span className='flex items-center justify-center gap-2'>
                  <p>+92 (323) 6620434</p>
                  <Link href="https://wa.me/923236620434" target='_blank' className='border rounded-full bg-white hover:shadow-lg w-10 h-10 flex items-center justify-center transition duration-300' >
                    <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                      <rect width="256" height="256" fill="none" />
                      <path d="M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z" fill="#14A800" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" />
                      <polyline points="168 48 208 48 208 88" fill="white" stroke="#14A800" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" />
                      <line x1="160" y1="96" x2="208" y2="48" fill="white" stroke="#14A800" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" />
                    </svg>
                  </Link>
                </span>
              </div>
            </li>
          </ul>
          <div className='hidden md:block text-sm'>
            <span className='flex items-center justify-center gap-2'>
              <p>+92 (323) 6620434</p>
              <Link href="https://wa.me/923236620434" target='_blank' className='border rounded-full bg-white hover:shadow-lg w-10 h-10 flex items-center justify-center transition duration-300' >
                <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <rect width="256" height="256" fill="none" />
                  <path d="M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z" fill="#14A800" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" />
                  <polyline points="168 48 208 48 208 88" fill="white" stroke="#14A800" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" />
                  <line x1="160" y1="96" x2="208" y2="48" fill="white" stroke="#14A800" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" />
                </svg>
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar