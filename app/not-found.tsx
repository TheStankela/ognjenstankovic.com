import Link from 'next/link';
import React from 'react'


export default function NotFound(){
    return (
        <section className="py-24 bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-white">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">Something&apos;s missing.</p>
                    <p className="mb-4 text-lg font-light  text-gray-400">Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page. </p>
                    <a href="/" className="inline-flex text-white bg-gray-800 hover:bg_dark_blue
                    focus:ring-4 focus:outline-none font-medium rounded-lg 
                    text-sm px-5 py-2.5 text-center focus:ring-primary-900 my-4">Back to Homepage</a>
                </div>   
             </div>
        </section>
    );
}