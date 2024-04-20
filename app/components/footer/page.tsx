// components/Footer.js
'use client'
import Link from "next/link";
import SmoothScroll from "../SmoothScroll";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-5 text-center font-Poppins px-8">
      <div className="container mx-auto max-w-[50rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 mb-10 md:space-y-0 space-y-10">

          <div className="font-Concert text-start -mt-3 space-y-16">
            <h2 className=" text-4xl">Let&apos;s make something <br />amazing together</h2>
            <h2 className="font-Concert text-2xl">Send me a message on <br /><Link href="https://www.upwork.com/freelancers/suhaibinsari" target='_blank' className="underline text-[#14A800]">Upwork</Link></h2>
          </div>

          <div className="flex flex-col md:items-end items-start justify-center text-center text-xl space-y-5" >
            <p className="font-bold text-start md:text-center">Information</p>
            <ul className="text-sm text-start md:text-center space-y-5 mr-6" >
              <li className='hover:border-x-2 cursor-pointer w-[6rem] transition-all duration-100 border-gray-900 rounded-full px-2 hover:text-[#14A800] hover:border-[#14A800]'>
                <SmoothScroll to='section1'>SERVICES</SmoothScroll>
              </li>
              <li className='hover:border-x-2 cursor-pointer w-[6rem] transition-all duration-100 border-gray-900 rounded-full px-2 hover:text-[#14A800] hover:border-[#14A800]'>
                <SmoothScroll to='section2'>EXPERIENCE</SmoothScroll>
              </li>
              <li className='hover:border-x-2 cursor-pointer w-[6rem] transition-all duration-100 border-gray-900 rounded-full px-2 hover:text-[#14A800] hover:border-[#14A800]'>
                <SmoothScroll to='section3'>PROJECTS</SmoothScroll>
              </li>
              <li className='hover:border-x-2 cursor-pointer w-[6rem] transition-all duration-100 border-gray-900 rounded-full px-2 hover:text-[#14A800] hover:border-[#14A800]'>
                <SmoothScroll to='section4'>REVIEWS</SmoothScroll>
              </li>
            </ul>
          </div>
        </div>
        <hr className="mb-5" />
        <div className="flex items-center justify-center md:justify-between">
          <div className="hidden md:block">
            <span className="flex items-center justify-center">
              <SmoothScroll to='section0'><p className="font-Crafty text-xl cursor-pointer">Suhaib .dev</p></SmoothScroll>
              <hr className="w-4 border rotate-90" />
              <p className="text-xs">&copy; {currentYear} All Rights Reserved. </p>
            </span>
          </div>
          <p className="text-xs text-center">Designed by <span className="text-[#14A800]">Suhaib Ahmad</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
