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
            During college, I explored MERN stack bootcamps to build a strong foundation in web development. With a
            <span className='font-semibold'> BS </span>
            in Computer Science, I pursued my passion for software engineering and gained experience through internships and early projects. I then focused on frontend development, honing my skills in modern frameworks and libraries. Currently, I continue my journey as a
            <span className='font-semibold'> frontend developer at Botnostics Solutions </span>
            , where I build dynamic websites, dashboards, and interactive applications. I love solving problems and chasing that
            <span className='font-semibold'> “aha!” </span>
            moment when everything clicks. I’m always eager to learn and excited about exploring new technologies.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
