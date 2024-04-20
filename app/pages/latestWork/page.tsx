'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Slider from '@/app/components/workC/page';

import Link from "next/link";


const page = () => {
  return (
    <>
      <motion.div
        className='flex flex-col items-center justify-center font-Poppins space-y-10 py-24 md:text-start text-center'
        id="section3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >

        <div className='grid grid-cols-1 md:grid-cols-2 md:w-[44rem] px-8 md:px-0'>
          <motion.div
            className='space-y-4'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className='text-5xl font-Concert'>My Latest Work</h2>
            <p>Perfect solution for digital Experience</p>
          </motion.div>
          <motion.div
            className='text-right md:block hidden md:mt-10 underline text-orange-600'
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/pages/explore">Explore More Work</Link>
          </motion.div>
        </div>

        <div className='w-full max-w-[60rem] px-2'>
          <Slider />
        </div>

      </motion.div>
    </>
  )
}

export default page;
