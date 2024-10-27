import React from 'react'
import Ice from '@/../public/ice.png';
import DG from '@/../public/dg.png';
import Saltx from '@/../public/saltx.png';
import Fif from '@/../public/fif.png';
import Image from 'next/image';

const Client = () => {
    return (
        <div className='flex flex-col items-center justify-center w-screen'>
            <span className='font-josefin font-bold text-xl'>Our Client</span>
            <span className='font-josefin text-primary'>More than 10 Client who have worked with me</span>
            <div className="flex w-8/12 h-28 mt-10 mb-20">
                <div className="border-white border flex items-center justify-center">
                    <Image src={Ice} alt="ice" className='w-6/12' />
                </div>
                <div className="border-white border flex items-center justify-center">
                    <Image src={DG} alt="dg" className='w-6/12' />
                </div>
                <div className="border-white border flex items-center justify-center">
                    <Image src={Saltx} alt="saltx" className='w-6/12' />
                </div>
                <div className="border-white border flex items-center justify-center">
                    <Image src={Fif} alt="fif" className='w-6/12' />
                </div>
            </div>
        </div>
    )
}

export default Client
