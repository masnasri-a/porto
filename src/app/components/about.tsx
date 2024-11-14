"use client";
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Bgs from '@/../public/bgs.png';
import Image from 'next/image';
const About = () => {
    return (
        <div className="">
            <div className="flex">
                <div className='mt-20 p-10 flex flex-col gap-5 md:justify-start justify-center items-center md:items-start md:text-start text-center'>
                    <span className='font-josefin font-semibold text-xl text-primary'>About me</span>
                    <span className='font-josefin font-semibold md:text-5xl text-3xl'>I can deliver resuls than <br /> exceed your expectations.</span>
                    <button className='border flex items-center justify-center gap-2 border-primary p-4 md:w-4/12 w-full font-josefin hover:translate-x-2 hover:bg-secondary'><span className='mt-1'>Hire Me Now</span> <FaArrowRight /></button>
                </div>
            </div>
            <div className="flex gap-7 justify-center mt-20 p-10 ">
                <div className="flex flex-col items-center ">
                    <span className='font-josefin md:text-7xl text-4xl'>15<span className='text-primary'>+</span></span>
                    <span className='font-josefin text-gray-300 text-center'>Project Complete</span>
                </div>
                <div className="flex flex-col items-center ">
                    <span className='font-josefin md:text-7xl text-4xl'>10<span className='text-primary'>+</span></span>
                    <span className='font-josefin text-gray-300'>Clients</span>
                </div>
                <div className="flex flex-col items-center ">
                    <span className='font-josefin md:text-7xl text-4xl'>{new Date().getFullYear() - 2019}<span className='text-primary'>+</span></span>
                    <span className='font-josefin text-gray-300'>Year Experience</span>
                </div>
            </div>
            <div className="bg-black">
            <Image src={Bgs} alt="bgs" className='w-screen bg-transparent' />
            </div>
        </div>
    )
}

export default About
