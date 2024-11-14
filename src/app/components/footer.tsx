import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaThreads, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='border-t border-primary font-josefin flex md:justify-between items-center justify-center md:flex-row-reverse flex-col px-5 py-5 items-end md:gap-0 gap-4'>
      <div className="flex flex-row gap-4 md:gap-8 justify-center">
            <Link href={"/"} ><FaInstagram /></Link>
            <Link href={"/"} ><FaThreads /></Link>
            <Link href={"/"} ><FaLinkedinIn /></Link>
            <Link href={"/"} ><FaXTwitter /></Link>
        </div>
        <div className="">
            <span>© Nasri Adzlani. All right reserved {new Date().getFullYear()}</span>
        </div>
        
    </div>
  )
}

export default Footer