'use client'
import { motion } from 'framer-motion'
import React from 'react'



export default function page() {
  return (
    <div className="bg-[#F8F7F1] py-10 flex flex-col items-center justify-center space-y-6" id='section2'>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-5xl font-Concert text-center mb-12">About Me</h2>
        <motion.div
          className='md:w-[50rem] w-[20rem]'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <p className='font-Poppins text-center leading-8 tracking-wide'>
            During my college years, I explored various bootcamps to get a grip on the basics of MERN stack. With a BS in Computer Science under my belt, I decided to pursue my passion for software engineering. Landing an internship at IIFA Tech introduced me to Ruby on Rails. Later, as a junior developer at Snow Dream Studios, I focused on frontend development. Solving problems is what excites me most about programming. I thrive on that &quot;Eureka!&quot; moment when a solution clicks.
            Always eager to embrace new tech, <span className='font-semibold'> I&apos;m currently seeking a full-time role as a software developer</span>.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
