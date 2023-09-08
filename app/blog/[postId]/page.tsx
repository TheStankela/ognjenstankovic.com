import React from 'react'
import { getPostsMeta, getPostByName } from '@/lib/posts'
import notFound from '@/app/not-found'
import getFormattedDate from '@/lib/getFormattedDate'

type Props = {
  params: {
    postId: string
  }
}

export async function generateMetadata({params: {postId}}: Props){
const post = await getPostByName(`${postId}.mdx`)

if(!post){
  return {
    title: 'Post Not Found',
    description: 'The page you are looking for does not exist.',
  }
}

return {
  title: post.meta.title,
  description: post.meta.description,
  alternates: {
    canonical: `/blog/${post.meta.id}`
  },
  openGraph: {
    title: `${post.meta.title}`,
    url: `https://ognjenstankovic.com/blog/${post.meta.id}`
  }
}

}

export default async function page({params: {postId}}: Props){
  const post = await getPostByName(`${postId}.mdx`)

  if(!post) return notFound();

  const {meta, content} = post

  const pubDate = getFormattedDate(meta.date);

  if(!meta.readingTime){
    meta.readingTime = "5"
  }
  
  return (
   <>
   <div className='px-8 py-12 prose prose-xl prose-invert mx-auto'>
    <h1 className='text-3xl mt-4 mb-0'>{meta.title}</h1>
    <p className='mt-0 text-sm'>
      {pubDate}, Read Time: {meta.readingTime} minutes.
    </p>
    <article>
      {content}
    </article>
    <p className='mb-10'>
      <a href="/">Back to home</a>
    </p>
   </div>
   </>
  )
}

