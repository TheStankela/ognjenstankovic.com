import React from 'react'
import Connect from '@/components/Connect'
import { getPostsMeta } from '@/lib/posts'
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

    const totalData = posts.length;
    const itemsPerPage = 10;

    const totalPages = Math.ceil(totalData / itemsPerPage);

    let currentPage = 1;

  return (
      <section className="py-12 bg_dark_gray">
        <div className="pb-8 px-4 mx-auto max-w-screen-xl lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-[#2880DA]">Blog</h2>
            </div> 
                <div className="grid gap-8 max-w-screen-md mx-auto">
                   {posts.map(post => (
                    <BlogArticle key={post.id} postId={post.id} 
                    date={post.date} 
                    title={post.title} 
                    description={post.description} 
                    coverImage={post.coverImage} />
                    ))} 
                    <div className="mt-3 text-white font-bold flex justify-center">
                      <a type="button" className="bg-blue-900/90 text-white hover:bg-sky-700 rounded-lg px-3 py-2 cursor-pointer">Prev</a>
                        <span className='text-white px-3 py-2'>{`${currentPage} / ${totalPages}`}</span>
                      <a type="button" className="bg-blue-900/90 text-white hover:bg-sky-700 rounded-lg px-3 py-2 cursor-pointer">Next</a>
                    </div>                 
                </div>  
        </div>
        <Connect/>
    </section>
  )
}
