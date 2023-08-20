import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="shadow pt-8 bg-gray-900">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Link href="/" className="flex items-center mb-4 sm:mb-0">
                <img src="/images/avatar.png" className="h-8 mr-3" alt="Flowbite Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Ognjen Stanković</span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400">
                <li>
                    <Link href="#" className="mr-4 hover:underline md:mr-6">Blog</Link>
                </li>
                <li>
                    <Link href="#" className="mr-4 hover:underline md:mr-6">Sponsorship</Link>
                </li>
                <li>
                    <Link href="#" className="mr-4 hover:underline md:mr-6">About</Link>
                </li>
            </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8"/>
        <span className="block text-sm sm:text-center text-gray-400">© 2023 <Link href="/" className="hover:underline">Ognjen Stankovic</Link>. All Rights Reserved.</span>
    </div>
</footer>
  )
}

export default Footer