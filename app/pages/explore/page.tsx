import React from 'react';
import { Projects } from '@/app/utils/mock';
import Image from 'next/image';
import Link from 'next/link';



const categories = [
  { name: 'All Projects', link: '/pages/explore' },
  { name: 'Frontend Dev', link: '/category/Frontend' },
  { name: 'Blockchain', link: '/category/Blockchain' },
  { name: 'Fullstack Dev', link: '/category/Fullstack' },
  { name: 'Designing & UX/UI', link: '/category/UI-UX' },
];

export default function Page() {
  return (
    <>
      <div className='py-20 px-2 mx-auto' id="section0">
        <div className='flex flex-col items-center justify-center'>
          <span className='py-2 mt-20 p-4'>
            <ul className='flex flex-col sm:flex-row font-Poppins items-center justify-center gap-5'>
              {categories.map((category, index) => (
                <li key={index}>
                  <Link href={category.link}>
                    <div className="hover:bg-gray-300 transition duration-300 ease-in-out rounded-full px-3 py-1">
                      {category.name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </span>
          <div className="container mx-auto py-8">
            <h1 className="text-5xl font-bold font-Concert mb-4 text-center py-10">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              {Projects.map((project, index) => (
                <Link href={project.link} target="_blank" key={index}>
                  <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl h-[20rem] w-auto group px-6 py-3">
                    {/* Overlay */}
                    <div className="absolute z-50 inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 transition duration-300 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center cursor-pointer">
                      <div className='flex items-center justify-center gap-2'>
                        <p className="text-white">Visit Site</p>
                        <svg className='w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                    {/* Project content */}
                    <div className='space-y-1 h-full flex gap-1 flex-col-reverse items-start justify-start'>
                      <h3 className="z-10 text-xl px-2 text-center pb-3 mb-2 text-white font-Concert rounded-full" style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.094)' }}>{project.title}</h3>
                      <p className="z-10 font-Poppins text-[#F26440] text-sm rounded-full px-2" style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 92, 4, 0.094)' }}>{project.category}</p>
                    </div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="absolute object-top inset-0 transition duration-300 transform scale-100 group-hover:scale-105 h-full"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
