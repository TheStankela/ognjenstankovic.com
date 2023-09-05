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
    <article key={postId} className="px-6 pt-2 pb-5 md:py-4 rounded-lg border shadow-md mx-auto bg-gray-800 border-gray-700 ">
                            
                        <div className='flex flex-col md:flex-row items-center'>
                            <div className='w-full mx-auto'>
                                <a href={`blog/${postId}`}>
                                <Image 
                                className="w-full m-3 mx-auto md:pr-5" 
                                src="/images/lowres.jpg" 
                                alt="Bonnie Green avatar"
                                width={500}
                                height={500}
                                />
                                </a>
                            </div>
                            <div className='text-justify'>
                                <h2 className="m-0 text-2xl font-semibold tracking-tight text-white"><a href={`blog/${postId}`}>{title}</a></h2>
                                <span className="m-0 text-sm">{date}</span>
                                <p className="m-0 text-lg font-light text-gray-400">{description}</p>
                            </div>
                        </div>
                    </article> 
  )
}