import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="border-gray-200 bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="/" className="flex items-center w-8 md:w-10">
                    <Image 
                    className='rounded-full  mr-3'
                    src='/images/avatar.png'
                    width={48} 
                    height={48}
                    alt='Ognjen Stankovic'
                    priority={true}
                    />
                <span className="self-center text-md md:text-xl font-semibold whitespace-nowrap text-white">Ognjen Stanković</span>
            </Link>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden
            focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 bg-gray-800 md:bg-gray-900">
                <li>
                    <Link href="blog" className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-white md:hover:text-gray-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Blog</Link>
                </li>
                <li>
                    <Link href="sponsorship" className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-white md:hover:text-gray-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Sponsorship</Link>
                </li>
                <li>
                    <Link href="about" className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-white md:hover:text-gray-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">About</Link>
                </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar