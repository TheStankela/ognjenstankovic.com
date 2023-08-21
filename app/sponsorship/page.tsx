import Newsletter from '@/components/Newsletter'
import React from 'react'

export default function page() {
  return (
    <section className='bg-gray-800'>
        <div className="mx-auto py-12  max-w-screen-md">
                <h1 className="py-10 text-center text-4xl font-medium">
                    Ognjen Stankovic Blog Sponsorship Opportunities
                </h1>
                <h3 className='pt-12 text-2xl text-start mx-3'>
                    Audience and Reach
                </h3>
                <ul className='pt-5 mx-5'>
                    <li>
                        <p className='text-sm my-2'>
                            <span className='font-semibold'>Reach: </span> 5000+ and growing 200+ every month.
                        </p>
                    </li>
                    <li>
                        <p className='text-sm my-2'>
                            <span className='font-semibold'>Audience: </span> Software Engineers, Software Architects, Solution Architects..
                        </p>
                    </li>
                    <li>
                        <p className='text-sm my-2'>
                            <span className='font-semibold'>Average open rate:: </span> 51%
                        </p>
                    </li>
                    <li>
                        <p className='text-sm my-2'>
                            <span className='font-semibold'>Average sponsorship views: </span> 3,000+
                        </p>
                    </li>
                    <li>
                        <p className='text-sm my-2'>
                            <span className='font-semibold'>Average sponsorship clicks: </span> 100-500 depending on relevancy and sponsorship copy
                        </p>
                    </li>
                    <li>
                        <p className='text-lg my-5'>
                            COST: 150$
                        </p>
                    </li>
                </ul>
                <h3 className='pt-12 text-xl text-start mx-3'>
                    MORE INFORMATION WILL BE ADDED SOON!
                </h3>
            </div>
            <Newsletter/>
    </section>
    
        )
}
