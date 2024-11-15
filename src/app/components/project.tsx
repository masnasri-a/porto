import React from 'react'
import Finance from '@/../public/finacial.png'
import Gov from '@/../public/goverment.png'
import Image from 'next/image'

const Project = () => {
  return (
    <div className='flex flex-col items-end p-10 bg-neutral-800 text-white' id="portfolio">
      <span className='font-josefin font-bold text-primary text-3xl'><span className='text-white'>Selected </span>Projects</span>
      <div className="scroll-m-2 flex md:flex-row flex-col gap-5 mt-10">
        <div className="w-1/12"></div>
        <div className="md:w-5/12 w-full">
          <Image src={Finance} alt="finance" className='rounded-ss-xl h-80 object-cover rounded-t-xl' />
          <div className="bg-black p-5">
            <span className='text-primary font-bold text-xl font-josefin'>Financial Project</span>
          </div>
        </div>
        <div className="md:w-5/12 w-full">
          <Image src={Gov} alt="gov" className='rounded-ss-xl h-80 object-cover rounded-t-xl bg-gray-300' />
          <div className="bg-black p-5">
            <span className='text-primary font-bold text-xl font-josefin'>Goverment Project</span>
          </div>
        </div>
        <div className="md:w-1/12 w-full flex items-center justify-center">
          <div className="border border-primary h-10 w-20 flex justify-center items-center cursor-pointer"><span className='font-josefin'>More</span></div>
        </div>
      </div>
    </div>
  )
}

export default Project