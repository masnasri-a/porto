import React from 'react'

const Service = () => {
  return (
    <div className='m-10 text-white' id="services">
        <div className="flex flex-col text-center mt-10">
            <span className='font-josefin text-primary text-xl'>Service</span>
            <span className='font-josefin text-2xl md:text-4xl font-bold'>Available services that <br/> I can work on</span>
        </div>
        <div className="mt-10">
            <span className='font-josefin text-primary text-xl md:text-2xl font-semibold md:font-bold'>01. <span className='text-white'>Web Development</span></span>
            <div className="flex justify-center mt-5">
            <div className="flex justify-center w-9/12 flex-col md:flex-row font-josefin font-bold">
              <div className="border w-full md:w-1/5 px-10 py-7 text-center flex justify-center items-center">
                <span>Frontend Development</span>
              </div>
              <div className="border w-full md:w-1/5 px-10 py-7 text-center flex justify-center items-center">
                <span>Backend Development</span>
              </div>
              <div className="border w-full md:w-1/5 px-10 py-7 text-center flex justify-center items-center">
                <span>Fullstack Development</span>
              </div>
              <div className="border w-full md:w-1/5 px-10 py-7 text-cente flex justify-center items-center">
                <span>Mobile Development</span>
              </div>
              <div className="border w-full md:w-1/5 px-10 py-7 text-center flex justify-center items-center">
                <span>Web3 Developer</span>
              </div>
            </div>
            </div>
        </div>
        <div className="mt-10">
            <span className='font-josefin text-primary text-xl md:text-2xl font-semibold md:font-bold'>02. <span className='text-white'>Other</span></span>
            <div className="flex justify-center mt-5">
            <div className="flex flex-col md:flex-row justify-center w-9/12 font-josefin font-bold">
              <div className="border w-full md:w-1/5 px-10 py-7 text-center flex justify-center items-center">
                <span>AI Engineer</span>
              </div>
              <div className="border w-full md:w-1/5 px-10 py-7 text-center flex justify-center items-center">
                <span>Tech Architech</span>
              </div>
              <div className="border w-full md:w-1/5 px-10 py-7 text-center flex justify-center items-center">
                <span>Blockchain</span>
              </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Service
