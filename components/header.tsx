"use client";

import React, { useState } from "react";
import upwork from "../public/upwork.png"
import Image from "next/image";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  // State to manage the visibility of the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    console.log(setIsMobileMenuOpen)
  };


  return (
    <header className="z-[999] relative flex items-center justify-center">
      {/* {isMobileMenuOpen && (

        <motion.div
          className=""
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
        ></motion.div>
      )} */}


      {/* Burger menu button */}
      <div className="container sm:mt-[-12rem] mt-[-8rem] px-4 md:hidden block ">
        <div className="flex items-center justify-between">
          <div>
            <motion.div
            // initial={{ y: -100, x: "-50%", opacity: 0 }}
            // animate={{ y: 0, x: "0", opacity: 1 }}
            >
              <Link href="#">
                <div className='bg-[#030712]  relative flex items-center justify-between px-2 py-[10px] p-1 rounded-full '>
                  <p className='text-white font-bold pr-12 '>Suhaib</p>
                  <span className='bg-white absolute p-[6px] px-2 rounded-full right-[4px]'>
                    <p className='font-bold text-black' >.dev</p>
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>
          <div>
            <button
              className="block md:hidden "
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

          </div>
        </div>
      </div>

      {/* Mobile menu */}

      <div


        className={clsx(
          "fixed  top-0  left-0 w-full p-4 transition-transform duration-300 ease-in-out transform border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75",
          { "-translate-x-full": !isMobileMenuOpen }
        )}
      >
        <div className="w-full flex items-end justify-end">
          <button onClick={closeMobileMenu} className="top-0 left-0 border flex items-center justify-center text-2xl text-gray-700 rounded-full border-gray-700 h-10 w-10">x</button>
        </div>
        <ul className="flex items-center justify-center text-center flex-col gap-4 mb-4 ">
          {links.map((link) => (
            <motion.li
              className=" text-xl"
              key={link.hash}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Link
                className={clsx(
                  "hover:text-gray-300",
                  { "text-gray-700": activeSection === link.name }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
        <motion.div
          className="px-[2rem] sm:px-[15rem] mb-4"
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "0", opacity: 1 }}>
          <Link href="#" className="">
            <div className="bg-[#15A703] rounded-full flex items-center justify-center">
              <p className="text-white font-bold">Visit</p>
              <Image src={upwork} alt="no-image" className="h-10 w-10" />
            </div>
          </Link>
        </motion.div>
      </div>

      <motion.div
       initial={{ y: 0, x: "0", opacity: 0 }}
       animate={{ y: 0, x: "0", opacity: 1 }}
      className="hidden md:block">

        <div className="flex items-center justify-center">
          <nav className="flex items-center justify-center fixed top-0 w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 p-1 sm:w-[41rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75">
            <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
              <motion.div
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "0", opacity: 1 }}>
                <Link href="#">

                  <div className='bg-[#030712]  relative flex items-center justify-between px-2 py-[10px] p-1 rounded-full '>
                    <p className='text-white font-bold pr-12 '>Suhaib</p>
                    <span className='bg-white absolute p-[6px] px-2 rounded-full right-[4px]'>
                      <p className='font-bold' >.dev</p>
                    </span>
                  </div>
                </Link>
              </motion.div>
              {links.map((link) => (
                <motion.li
                  className="h-3/4 flex items-center justify-center relative"
                  key={link.hash}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <Link
                    className={clsx(
                      "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                      {
                        "text-gray-950 dark:text-gray-200":
                          activeSection === link.name,
                      }
                    )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link.name}

                    {link.name === activeSection && (
                      <motion.span
                        className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      ></motion.span>
                    )}
                  </Link>
                </motion.li>

              ))}
              <motion.div
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "0", opacity: 1 }}>
                <Link href="#">
                  <Image src={upwork} alt="no-image" className="h-10 w-10" />
                </Link>
              </motion.div>
            </ul>
          </nav>
        </div>
      </motion.div>
    </header>
  );
}
