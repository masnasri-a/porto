import React from 'react'

type MenuData = {
    title: string
    url: string
}

const Headers = () => {
    const data: MenuData[] = [
        { title: 'Home', url: '/' },
        { title: 'Services', url: '#services' },
        { title: 'Portfolio', url: '#portfolio' },
        { title: 'Blog', url: '/blog' },
        { title: 'Contact', url: '#contact' },
    ]
    return (
        <div className="w-screen fixed top-0 z-50 bg-black h-12 py-6 px-20 hidden justify-between font-josefin md:flex">
            <div className="list-menu flex gap-5">
                {
                    data.map((item, index) => (
                        <a key={index} href={item.url} className="text-white hover:text-gray-400">{item.title}</a>
                    ))
                }
            </div>
            <div className="">
                <button className="border border-primary h-10 px-6 text-white bg-black">
                    Get in Touch
                </button>
            </div>
        </div>

    )
}

export default Headers
