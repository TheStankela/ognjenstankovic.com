import React from 'react'
import { getPostsMeta } from '@/lib/posts'

export default async function Posts() {
  
    const posts = await getPostsMeta();

    if(!posts){
        return <p className='mt-10 text-center'>Sorry, no posts are available.</p>
    }
  
    return (
    <section className='mt-6 mx-auto max-w-2xl'>
        {posts.map(post => (
            post.title
        ))}
    </section>
  )
}
