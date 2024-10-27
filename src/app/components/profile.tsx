import React from 'react'
import Background from "@/../public/background.png";
import Image from 'next/image';
import scroll from '@/../public/scroll.gif';

const Profile = () => {

    return (
        <div className="relative w-screen pt-20 z-20 flex">
            <div className="absolute z-10 text-white p-12 flex-col gap-2 h-[calc(100dvh_-_80px)] flex justify-center w-screen">
                <span className="font-josefin text-xl font-semibold">Hello Dear, I am </span>
                <span className="font-josefin text-8xl font-extrabold bg-primary w-max px-6 pt-4 text-black">Nasri Adzlani</span>
                <span className='font-josefin text-xl text-gray-300'>Hello, my name is nasri adzlani, nice to meet you I would like <br />to welcome you with my personal portofolio</span>
                <button className="border border-primary font-josefin hover:bg-secondary hover:translate-x-2 w-max mt-5 h-10 px-6 pt-1 text-white">Download CV</button>
            </div>
            <div className="relative z-0 w-screen">
                <Image src={Background} alt="background" className='w-screen blur-sm' />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            </div>
            <div className="absolute bottom-10 w-screen justify-center flex">
                <Image src={scroll} alt="scroll" className='w-10' />
            </div>
        </div>
    )
}

export default Profile
