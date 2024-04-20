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

export default function page() {
    return (
        <>
            <div className='bg-[#F8F7F1] py-10 px-2 mx-auto' id="section0">
                <div className='flex items-center justify-center'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 w-[60rem]'>
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
                    </div>
                </div>
            </div>
        </>
    )
}
