import { getPostsMeta } from '@/lib/posts'
import Image from 'next/image'
import React from 'react'
import BlogArticle from './BlogArticle';

export default async function Feed() {
    const posts = await getPostsMeta();

    const placeholderDescription = 'Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.';

    if(!posts) return (
    <div className='pb-12 bg-gray-900'>
        <div className='py-8 px-4 mx-auto max-w-screen-md'>
            <h2 className='mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white'>
                No posts found.
            </h2>
        </div>
    </div>);

  return (
    <section className="pb-12 bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-[#2880DA]">Latest Topics</h2>
      </div> 
      <div className="grid gap-8 max-w-screen-md mx-auto">
        <BlogArticle postId={posts[0].id} date={posts[0].date} title={posts[0].title} description={posts[0].description} coverImage={posts[0].coverImage} />
        <BlogArticle postId={posts[1].id} date={posts[1].date} title={posts[1].title} description={posts[1].description} coverImage={posts[1].coverImage} />
        <BlogArticle postId={posts[2].id} date={posts[2].date} title={posts[2].title} description={posts[2].description} coverImage={posts[2].coverImage} />
      </div>  
  </div>
</section>
  )
}
