'use client'
import Exp from '@/app/components/exp/page'
import { motion } from 'framer-motion';

export default function page() {
  return (
    <div className="bg-[#F8F7F1] py-10 flex flex-col items-center justify-center space-y-6"
      id="section2">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-5xl font-Concert text-center mb-8">Work Experience</h2>
        <motion.div
          className='md:w-[50rem] w-[20rem]'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Exp />
        </motion.div>
      </motion.div>
    </div>
  )
}
