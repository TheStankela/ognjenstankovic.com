import React from 'react'
import Image from 'next/image'
import Connect from '@/components/Connect'
import { getPostsMeta } from '@/lib/posts'
import getFormattedDate from '@/lib/getFormattedDate';
import BlogArticle from '@/components/BlogArticle';

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
                    <BlogArticle key={post.id} postId={post.id} 
                    date={post.date} 
                    title={post.title} 
                    description={'Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.'} 
                    coverImage={''} />
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
