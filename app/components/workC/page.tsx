'use client'
import React from 'react';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import Image from 'next/image';
import Link from 'next/link';

import launchpad from '../../../public/lp.png';
import ai from '../../../public/ai.png';
import us from '../../../public/us.png';
import rp from '../../../public/rp.png';
import crabify from '../../../public/crabify.png';
import If from '../../../public/if.png';
import beagle from '../../../public/beagle.png';


const Slider = () => {
	const [sliderRef] = useKeenSlider<HTMLDivElement>({
		loop: true,
		mode: "free",
		slides: { origin: "center", perView: 2.5, spacing: 10 },
		range: {
			min: -5,
			max: 5,
		},
	});

	const slideData = [
		{ title: 'AI BEAGLE', description: 'Web Design', image: beagle, link: 'https://www.figma.com/file/cZjGpnEvdtiHJUqyI8Xuwh/AiBeagle?type=design&node-id=0%3A1&mode=design&t=5vN9bCZYHjZhubN9-1' },
		{ title: 'INFINITICOIN', description: 'Blockchain', image: If, link: 'https://infiniticoin.com/' },
		{ title: 'AI IMAGINE', description: 'Full Stack Development', image: ai, link: 'https://next-ai-unixsol.vercel.app/' },
		{ title: 'UNIXSOL', description: 'Full Stack Development', image: us, link: 'https://theunixsol.com/' },
		{ title: 'RUGPULL', description: 'Blockchain', image: rp, link: 'https://rugpull-gamma.vercel.app/' },
		{ title: 'LAUNCHPADONE', description: 'Blockchain', image: launchpad, link: 'https://launchpadone.tech/' },
		{ title: 'CRABIFY', description: 'Blockchain', image: crabify, link: 'https://dashboard.carbify.io/login' },
	];

	return (
		<>
			<div ref={sliderRef} className="keen-slider w-48 h-48 sm:w-80 sm:h-80 max-h-80 rounded-xl">
				{slideData.map((slide, index) => (
					<div key={index} className="keen-slider__slide p-4 rounded-xl text-start relative">
						<Link href={slide.link} target='_blank' passHref>
							<div className='space-y-1 h-full flex gap-1 flex-col-reverse items-start justify-start'>
								<h2 className='font-Concert  pb-2 text-white text-2xl px-2 rounded-full ' style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.094)' }}>{slide.title}</h2>
								<p className='font-Poppins text-[#F26440] text-sm rounded-full px-2' style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 92, 4, 0.094)' }}>{slide.description}</p>
							</div>
							<Image src={slide.image} alt="no-img" layout="fill" objectFit="cover" className='object-top transition-transform duration-300 hover:scale-105 z-[-100] group-hover:z-10' />
							{/* Overlay */}
							<div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
								<div className='flex items-center justify-center gap-2'>
									<p className="text-white">Visit Site</p>
									<svg className='w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M17 8l4 4m0 0l-4 4m4-4H3" />
									</svg>
								</div>
							</div>
						</Link>
					</div>
				))}
			</div>

		</>
	);
};

export default Slider;
