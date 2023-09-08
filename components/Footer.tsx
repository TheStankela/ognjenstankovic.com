import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="shadow pt-8 bg-gray-900">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-col justify-center items-center gap-3 md:gap-0 md:flex-row md:items-center md:justify-between">
                    <Image 
                    className='p-1 w-1/2 md:w-3/12 '
                    src='/images/navLogoTransparent.png'
                    height={32}
                    width={512}
                    alt='Ognjen Stankovic'
                    priority={true}
                    />
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400">
                <li>
                    <a href="/blog" className="mr-4 hover:underline hover:text-[#2880DA] md:mr-6">Blog</a>
                </li>
                <li>
                    <a href="/sponsorship" className="mr-4 hover:underline hover:text-[#2880DA] md:mr-6">Sponsorship</a>
                </li>
                <li>
                    <a href="/about" className="hover:underline hover:text-[#2880DA] md:mr-6">About</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8"/>
        <span className="block text-sm text-center text-gray-400">© 2023 <a href="/" className="hover:underline">Ognjen Stankovic</a>. All Rights Reserved.</span>
    </div>
</footer>
  )
}

export default Footer