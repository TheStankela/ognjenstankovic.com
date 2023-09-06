import React from 'react'
import Image from 'next/image'

type Props = {
    postId: string,
    date: string,
    title: string,
    description: string,
    coverImage: string,
}

export default function BlogArticle({postId, date, title, description, coverImage }: Props) {
  return (
    <article key={postId} className="p-3 rounded-lg border shadow-md mx-auto bg-gray-800 border-gray-700 ">
                            
                        <div className='flex flex-col md:flex-row items-center'>
                            <div className=''>
                                <a href={`blog/${postId}`}>
                                <Image 
                                className="w-auto md:max-w-[250px] m-3 mx-auto md:pr-5" 
                                src={`/${coverImage}`} 
                                alt={`${title} blog cover`}
                                width={500}
                                height={500}
                                />
                                </a>
                            </div>
                            <div className='text-justify'>
                                <h2 className="text-lg  md:text-2xl font-semibold tracking-tight text-white">
                                    <a href={`blog/${postId}`}>
                                        {title} 
                                    </a>
                                </h2>
                            <span className="text-xs text-white">{date}</span>
                                <p className="text-base  font-light text-gray-400">{description}</p>
                            </div>
                        </div>
                    </article> 
  )
}