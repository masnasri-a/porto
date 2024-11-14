import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='border-t border-primary font-josefin flex justify-between px-5 py-5 items-end'>
        <div className="">
            <span>© Nasri Adzlani. All right reserved {new Date().getFullYear()}</span>
        </div>
        <div className="flex flex-col">
            <Link href={"/"} >Instagram</Link>
            <Link href={"/"} >Threads</Link>
            <Link href={"/"} >Linkedin</Link>
            <Link href={"/"} >Twitter</Link>
        </div>
    </div>
  )
}

export default Footer