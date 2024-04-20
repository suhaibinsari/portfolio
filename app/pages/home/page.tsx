// import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import black from '../../../public/black.png'
// import myImg from '../../../public/bw5n.png'
// export default function page() {
//     return (
//         <>
//             <div className='bg-[#F8F7F1]  py-10 px-2 mx-auto'>
//                 <div className=' flex items-center justify-center '>
//                     <div className='grid grid-cols-1 md:grid-cols-2 gap-2  w-[60rem]'>
//                         <div className='flex flex-warp'>
//                             <div className="flex flex-col gap-5">
//                                 <p className="text-start font-Concert font-bold text-5xl lg:text-7xl">Hey There, <br /> I&apos;m Suhaib</p>
//                                 <p className="text-lg font-Poppins text-justify">A seasoned Full Stack Developer with a decade of experience. My track record speaks volumes—I consistently deliver exceptional work, leaving clients delighted. My expertise spans various domains, including web development, mobile app development, and blockchain solutions (from presale to dApps and smart contracts). Additionally, I excel in designing, crafting captivating UI/UX for both web and mobile platforms, and creating compelling brand identities. Let&apos;s elevate your project together<br />I love what I do. 😄</p>
//                                 <span className="flex items-center justify-center sm:justify-start gap-1 -mt-6 mb-5">
//                                     <p className="text-6xl font-bold font-Concert">10</p>
//                                     <p className="text-start text-sm font-Poppins font-semibold -mb-7 ">YEARS<br />EXPERIENCE</p>
//                                 </span>
//                             </div>
//                         </div>
//                         <div className='flex items-center justify-center'>
//                                 <Image
//                                     src={black}
//                                     alt="Suhaib portrait"
//                                     quality="95"
//                                     priority={true}
//                                     className="h-auto w-auto object-cover relative"
//                                 />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }


'use client'
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import black from '../../../public/black.png';
import Link from 'next/link';

export default function page() {
  return (
    <>
      <div className='bg-[#F8F7F1] py-10 px-4 mx-auto' id="section0">
        <div className='flex flex-col items-center justify-center w-full'>
          {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-2 w-[60rem]'>
                        <div className='flex flex-wrap'>
                            <AnimatePresence>
                                <motion.div
                                    key="text"
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className='flex flex-wrap'
                                >
                                    <div className="mb-5">
                                        <p className="text-start font-Concert font-bold text-5xl lg:text-7xl">Hey There, <br /> I&apos;m Suhaib</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    key="description"
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.3 }}
                                    className="flex flex-col gap-5"
                                >
                                    <div className="mb-5">

                                        <p className="text-lg font-Poppins text-justify">A seasoned Full Stack Developer with a decade of experience. My track record speaks volumes—I consistently deliver exceptional work, leaving clients delighted. My expertise spans various domains, including web development, mobile app development, and blockchain solutions (from presale to dApps and smart contracts). Additionally, I excel in designing, crafting captivating UI/UX for both web and mobile platforms, and creating compelling brand identities. Let&apos;s elevate your project together<br />I love what I do. 😄</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    key="experience"
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.5 }}
                                    className="flex items-center justify-center sm:justify-start gap-1 -mt-6 mb-5"
                                >
                                    <p className="text-6xl font-bold font-Concert">10</p>
                                    <p className="text-start text-sm font-Poppins font-semibold -mb-7 ">YEARS<br />EXPERIENCE</p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className='flex items-center justify-center'
                        >
                            <Image
                                src={black}
                                alt="Suhaib portrait"
                                quality="95"
                                priority={true}
                                className="h-auto w-auto object-cover relative"
                            />
                        </motion.div>
                    </div> */}

          <div className=' text-black flex flex-col md:flex-row gap-5 md:items-center justify-between w-[70rem]'>
            <div><h1 className='font-Concert font-bold text-5xl lg:text-7xl'>Hey there <br /> I&apos;m Suhaib</h1></div>
            <div><p className='text-base font-Poppins '>Frontend/ UI/Ux <br />I love what I do. </p></div>
          </div>
          <div className='relative flex items-center justify-center w-full'>
            <Image src={black} width={500} height={500} alt="no-img" className='' />
          </div>
          <div className='absolute text-black flex flex-col md:flex-row gap-5 md:items-center justify-between w-[70rem]'>
            <div><Link href=""><p className='font-Poppins text-[#F3704F] text-base underline'>suhaibinsari@gmail.com </p></Link></div>
            <div><p className='text-base hidden font-Poppins '>Frontend/ UI/Ux <br />I love what I do. </p></div>
          </div>
          <div className='absolute mt-[20rem] text-black flex flex-col md:flex-row gap-5 md:items-end justify-between w-[70rem]'>
            <div className='flex items-center justify-start gap-1 -mt-6 mb-5'>
              <p className="text-6xl font-bold font-Concert">5</p>
              <p className="text-start text-sm font-Poppins font-semibold -mb-7 ">YEARS<br />EXPERIENCE</p>
            </div>
            <div>
            <Link href="https://github.com/suhaibinsari" target='_blank' className='text-center' ><svg className='w-[10rem]' xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            <p className='font-Crafty'>Github</p>

            </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
