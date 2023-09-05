import React from 'react'
import Image from 'next/image'
import Connect from '@/components/Connect'
import { getPostsMeta } from '@/lib/posts'
import getFormattedDate from '@/lib/getFormattedDate';

export default async function Blog() {
    const posts = await getPostsMeta();
    

    if(!posts){
        return (
            <section className="pb-12 bg_dark_gray">
              <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-6">
                <p className='mt-10 text-center'>
                  Sorry, no posts available.
                </p>
              </div>
            </section>
        
        );
    }

    posts.forEach(post => {
        post.date = getFormattedDate(post.date);
    });
    
  return (
        <section className="pb-12 bg_dark_gray">
        <div className="pt-0 pb-8 px-4 mx-auto max-w-screen-xl lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white">Blog</h2>
            </div> 
                <div className="grid gap-8 max-w-screen-md mx-auto">
                   {posts.map(post => (
                    <article key={post.id} className="px-6 py-3 rounded-lg border  shadow-md bg-gray-800 border-gray-700 ">
                        <div className="flex justify-between items-center text-gray-500">
                            <span className="text-xs font-medium inline-flex items-center px-2.5 rounded bg-primary-200 text-primary-800">
                                <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                                Article
                            </span>
                            <span className="text-sm">{post.date}</span>
                        </div>
                        <h2 className="mb-1 text-2xl font-bold tracking-tight text-white"><a href={`blog/${post.id}`}>{post.title}</a></h2>
                        <p className="mb-1 font-light text-gray-400">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
                        <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                                <Image 
                                className="w-7 h-7 rounded-full" 
                                src="/images/avatar.png" 
                                alt="Bonnie Green avatar"
                                width={28}
                                height={28} />
                                <span className="font-medium text-white">
                                    Ognjen Stankovic
                                </span>
                            </div>
                            <a href={`blog/${post.id}`} className="inline-flex items-center font-medium text-white hover:underline">
                                Read more
                                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </article> 
                    ))} 
                    <div className="mt-3 text-white font-bold flex justify-center">
                    <a type="button" className="bg-blue-900/90 hover:bg-sky-700 rounded-lg px-3 py-2 cursor-pointer">Prev</a>
                    <span className="px-3 mx-3 py-2">Page 1</span>
                    <a type="button" className="bg-blue-900/90 hover:bg-sky-700 rounded-lg px-3 py-2 cursor-pointer">Next</a>
                    </div>                 
                </div>  
        </div>
        <Connect/>
    </section>
  )
}
