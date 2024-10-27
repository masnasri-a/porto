import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const About = () => {
  return (
    <div className='mt-20 p-10 flex flex-col gap-5'>
        <span className='font-josefin font-semibold text-xl text-primary'>About me</span>
        <span className='font-josefin font-semibold text-5xl'>I can deliver resuls than <br/> exceed your expectations.</span>
        <button className='border flex items-center justify-center gap-2 border-primary p-4 w-2/12 font-josefin hover:translate-x-2 hover:bg-secondary'><span className='mt-1'>Hire Me Now</span> <FaArrowRight /></button>
    </div>
  )
}

export default About
