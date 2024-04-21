
// import ProjectStatistics from '@/app/components/dCunter/page';
// import React from 'react';

// import Image from 'next/image';

// import img1 from '../../../public/download.png';
// import img2 from '../../../public/download (1).png';
// import img3 from '../../../public/download (2).png';

// const projects = [
//     { color: '#F26440', title: 'Blockchain & Solutions', projectsCount: 76, img: img2 },
//     { color: '#EDBF48', title: 'Full Stack Development', projectsCount: 76, img: img3 },
//     { color: '#286f6c', title: 'Website & Mobile Design', projectsCount: 76, img: img1 },
// ];

// export default function Help() {
//     return (
//         <>
//             <div className='flex items-center justify-center py-24 px-2'>
//                 <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0'>
//                     <div className='flex md:order-first order-last flex-col items-center justify-center space-y-2 md:items-start'>
//                         {projects.map((project, index) => (
//                             <div key={index} className='border rounded-xl p-3 w-[20rem] flex items-center justify-center gap-2 hover:shadow-lg hover:bg-[#F8F7F1] transform hover:-translate-y-1 hover:scale-100 transition-all duration-300 ease-in-out' >
//                                 <span className='border h-16 w-16 rounded-full flex items-center justify-center  text-white text-2xl'style={{ backgroundColor: project.color }}>
//                                     <Image src={project.img} alt={project.title} className="h-8 w-8 object-cover filter brightness-0 invert " />
//                                 </span>
//                                 <span className='space-y-1'>
//                                     <h2 className='font-Concert text-lg w-[13rem]'>{project.title}</h2>
//                                     <p className='text-xs'>{project.projectsCount} Projects</p>
//                                 </span>
//                             </div>
//                         ))}
//                     </div>
//                     <div className='space-y-4 flex flex-col'>
//                         <h2 className='font-Concert text-5xl text-center md:text-start'>How do I help?</h2>
//                         <p className='font-Poppins max-w-[23.5rem] text-center md:text-start'>I will leverage my expertise to identify innovative solutions and effectively resolve any challenges you encounter.</p>
//                         <ProjectStatistics />
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }



'use client'

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import img1 from '../../../public/download.png';
import img2 from '../../../public/download (1).png';
import img3 from '../../../public/download (2).png';
import ProjectStatistics from '@/app/components/dCunter/page';
import Link from 'next/link';

const projects = [
    { color: '#F26440', title: 'Blockchain & Solutions', projectsCount: 111, img: img2, link: '/category/Blockchain'  },
    { color: '#EDBF48', title: 'Full Stack Development', projectsCount: 5, img: img3, link: '/category/Fullstack' },
    { color: '#286f6c', title: 'Website & Mobile Design', projectsCount: 15, img: img1, link: '/category/UI-UX' },
];

export default function Help() {
    return (
        <>
            <div className='flex items-center justify-center py-24 px-2'  id="">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0'>
                    <motion.div
                        className='flex md:order-first order-last flex-col items-center justify-center space-y-2 md:items-start'

                    >
                        {projects.map((project, index) => (
                                            <Link href={project.link} key={index}>

                            <motion.div
                                key={index}
                                className='border rounded-xl p-3 w-[20rem] flex items-center justify-center gap-2 hover:shadow-lg hover:bg-[#F8F7F1] transform hover:-translate-y-1 hover:scale-100 transition-all duration-300 ease-in-out'
                                initial={{ opacity: 0, y: 0 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.3 }}
                            >
                                <span className='border h-16 w-16 rounded-full flex items-center justify-center  text-white text-2xl' style={{ backgroundColor: project.color }}>
                                    <Image src={project.img} alt={project.title} className="h-8 w-8 object-cover filter brightness-0 invert" />
                                </span>
                                <span className='space-y-1'>
                                    <h2 className='font-Concert text-lg w-[13rem]'>{project.title}</h2>
                                    <p className='text-xs'>{project.projectsCount} Projects</p>
                                </span>
                            </motion.div>
                            </Link>
                        ))}
                    </motion.div>
                    <div>
                        <AnimatePresence>
                            <motion.div
                                key="text"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h2 className='font-Concert text-5xl text-center md:text-start mb-5'>How do I help?</h2>
                            </motion.div>
                            <motion.div
                                key="text"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <p className='font-Poppins max-w-[23.5rem] text-center md:text-start'>I will leverage my expertise to identify innovative solutions and effectively resolve any challenges you encounter.</p>
                            </motion.div>
                            <motion.div
                                key="text"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProjectStatistics />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </>
    );
}
