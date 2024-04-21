// import ReviewSection from '@/app/components/clients/page'
// import React from 'react'



// function page() {
//   return (
//     <div className='bg-[#F8F7F1] py-10 flex flex-col items-center justify-center mb-24  '>
//       <div className='md:w-[44rem] px-8 md:px-0 text-center space-y-6 mb-8'>
//         <h2 className='text-5xl font-Concert'>People talk about me</h2>
//         <p>My expertise sparks conversation. Clients rave about my innovative solutions, attention to detail, and exceptional results. Check out their glowing reviews!</p>
//       </div>
//       <ReviewSection />
//     </div>
//   )
// }

// export default page

'use client'

import { motion } from 'framer-motion';
import ReviewSection from '@/app/components/clients/page'

const PeopleTalkAboutMe = () => {
  return (
    <div className='bg-[#F8F7F1] py-10 flex flex-col items-center justify-center mb-24' >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='md:w-[44rem] px-8 md:px-0 text-center space-y-6 mb-8'>
          <motion.h2
            className='text-5xl font-Concert'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            People talk about me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            My expertise sparks conversation. Clients rave about my innovative solutions, attention to detail, and exceptional results. Check out their glowing reviews!
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <ReviewSection />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default PeopleTalkAboutMe;
