'use client'
import React, { useState } from 'react';
import Image from 'next/image';


import img1 from '../../../public/1.jpeg';
import img2 from '../../../public/2.png';
import img3 from '../../../public/3.png';
import img4 from '../../../public/4.png';
import img5 from '../../../public/5.png';
import img6 from '../../../public/6.png';
import img7 from '../../../public/7.png';
import img8 from '../../../public/8.png';
import img9 from '../../../public/9.png';



const testimonialsData = [
    {
        id: 1,
        name: 'Rggul Lickson',
        message: '5/5! He went above and beyond and delivered exactly what I needed. Told me to reach out with any questions in the future which was reassuring. I will be using them again in the future without a doubt! A+',
        post: '',
        image: img1
    },
    {
        id: 2,
        name: 'Aner',
        message: 'Suhaib exceeded all expectations with his exceptional service. Not only did he deliver more than asked, but he also demonstrated remarkable attention to detail and a keen understanding of my project needs. His friendly and approachable nature made the collaboration effortless and enjoyable. Without hesitation, I highly recommend Soahib for anyone seeking top-tier quality and professionalism. ',
        post: '',
        image: img2
    },
    {
        id: 3,
        name: 'Zanon',
        message: 'Delivered exactly according to the requirments. A happy customer. 5 stars indeed!',
        post: '',
        image: img3
    },
    {
        id: 4,
        name: 'Kyle',
        message: 'I had the pleasure of working with suhaib recently, and I am beyond impressed with the exceptional service and professionalism they provided. From the very beginning, suhaib demonstrated a remarkable level of accommodation, always ready to listen and understand my requirements.',
        post: '',
        image: img9
    },
    {
        id: 5,
        name: 'Tomberni',
        message: 'Suhaib was amazing from start to finish. He went through and explained everything to me thoroughly and he even went that extra mile to ensure that I was satisfied. He was quick on delivery and prompt with his services, a real wizard. excellent work, I would highly recommend. 5 stars from me        ',
        post: '',
        image: img5
    },
    {
        id: 6,
        name: 'Frammie',
        message: 'He went out of his way to be helpful and realised he was dealing with a novice had patience and understanding. I recommend this person for anyone who seeks good and prompt service at a competitive price; you will not be disappointed.',
        post: '',
        image: img6
    },
    {
        id: 7,
        name: 'Abrams',
        message: "It was an awesome experience working with suhaib. Took his time to explain everything to me amid my bad network. He's a great guy to work with, straightforward and did everything perfectly to my satisfaction. Will be coming back for more brother, thanks.",
        post: 'def',
        image: img7
    },
    {
        id: 8,
        name: 'Buckeye Nation',
        message: "The service provided was impeccable i highly recommend this dev, his work and response time was excellent took the time to go threw and explained the contract with me threw zoom call helped deploy and verified contract was able to explain everything very thorough and easy to understand even for a new learner like myself, he made the process very easy and streamline any questions i had he was more than willing to answer and is very knowledgeable about this space and the work he dose. he also completed the service faster than expected earlier than the dead line expected delivery. If i create another contract i will definitely have him help again he is worth every penny very good",
        post: 'def',
        image: img8
    },
    {
        id: 9,
        name: 'Iram Chiu',
        message: "Very patient and professional will do more business with suhaib i love the work and it was very easy",
        post: 'def',
        image: img4
    },

    // Add more testimonials as needed
];

const ReviewSection = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const handleSelectTestimonial = (index: number) => {
        setCurrentTestimonial(index);
    };

    return (
        <div className="px-2">
            <div className="max-w-lg mx-auto text-center space-y-16">
                <div className="flex justify-center flex-wrap gap-2">
                    {testimonialsData.map((testimonial, index) => (
                        <button
                            key={testimonial.id}
                            onClick={() => handleSelectTestimonial(index)}
                            className={`text-sm mr-2 focus:outline-none border p-1 rounded-full px-2 transition-colors duration-300 ${currentTestimonial === index ? 'text-white font-semibold bg-[#286F6C] shadow-xl' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            {testimonial.name}
                        </button>
                    ))}
                </div>
                <div className='grid grid-cols-1'>
                    <div className='relative border rounded-xl w-full sm:w-[30rem]  flex flex-wrap items-center justify-center'>
                        <div className='border-4 border-white  rounded-full h-20 w-20 absolute self-baseline -top-10 shadow-xl overflow-hidden'>
                            {testimonialsData[currentTestimonial].image && (
                                <div className="">
                                    <Image
                                        src={testimonialsData[currentTestimonial].image}
                                        alt="Testimonial Image"
                                        width={100}
                                        height={100}
                                        objectFit='cover'
                                        className='object-cover rounded-full w-20 h-20'
                                    />
                                </div>
                            )}
                        </div>
                        <div className='text-center px-2'>
                            <p className='text-sm mb-3 mt-14'>{testimonialsData[currentTestimonial].message}</p>
                            <hr />
                            <span className=''>
                                <h2 className='font-Concert text-xl mb-4'>- {testimonialsData[currentTestimonial].name}</h2>
                                {/* <p className='text-sm'>{testimonialsData[currentTestimonial].post}</p> */}
                                {/* Display the image if it exists */}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewSection;
