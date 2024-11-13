"use client";
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Bgs from '@/../public/bgs.png';
import Image from 'next/image';
const About = () => {
    const [yearNow, setYearNow] = React.useState(new Date().getFullYear());
    return (
        <div className="">
            <div className="flex">
                <div className='mt-20 p-10 flex flex-col gap-5'>
                    <span className='font-josefin font-semibold text-xl text-primary'>About me</span>
                    <span className='font-josefin font-semibold text-5xl'>I can deliver resuls than <br /> exceed your expectations.</span>
                    <button className='border flex items-center justify-center gap-2 border-primary p-4 w-4/12 font-josefin hover:translate-x-2 hover:bg-secondary'><span className='mt-1'>Hire Me Now</span> <FaArrowRight /></button>
                </div>
            </div>
            <div className="flex gap-7 justify-center mt-20 p-10 ">
                <div className="flex flex-col items-center ">
                    <span className='font-josefin text-7xl'>15<span className='text-primary'>+</span></span>
                    <span className='font-josefin text-gray-300'>Project Complete</span>
                </div>
                <div className="flex flex-col items-center ">
                    <span className='font-josefin text-7xl'>10<span className='text-primary'>+</span></span>
                    <span className='font-josefin text-gray-300'>Clients</span>
                </div>
                <div className="flex flex-col items-center ">
                    <span className='font-josefin text-7xl'>{yearNow - 2019}<span className='text-primary'>+</span></span>
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
