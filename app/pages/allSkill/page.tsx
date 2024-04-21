'use client'

import React from 'react'
import Skills from '@/app/components/skills/page'

import { motion } from 'framer-motion';


export default function page() {
    return (
        <div className='py-20 flex flex-col items-center justify-center space-y-6' id='section1'>
            <div className='flex flex-col items-center justify-center'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <h2 className="text-5xl font-Concert text-center mb-12">My Skills</h2>

                    <Skills />
                </motion.div>

            </div>
        </div>
    )
}
