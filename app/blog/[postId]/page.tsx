import React from 'react'
import { getPostsMeta, getPostByName } from '@/lib/posts'
import notFound from '@/app/not-found'
import Link from 'next/link'
import getFormattedDate from '@/lib/getFormattedDate'

export const revalidate = 0

type Props = {
  params: {
    postId: string
  }
}

export async function generateStaticParams(){
  const posts = await getPostsMeta()

  if(!posts) return [];

  return posts.map((post) => ({
    postId: post.id
  }))
}

export async function generateMetadata({params: {postId}}: Props){
const post = await getPostByName(`${postId}.mdx`)

if(!post){
  return {
    title: 'Post Not Found'
  }
}

return {
  title: post.meta.title,
}

}

export default async function page({params: {postId}}: Props){
  const post = await getPostByName(`${postId}.mdx`)

  if(!post) return notFound();

  const {meta, content} = post

  const pubDate = getFormattedDate(meta.date);

  // const tags = meta.tags.map((tag, i) => (
  //   <Link key={i} href={`/tags/${tag}`}>{tag}</Link>
  // ))
  
  return (
   <>
   <div className='px-8 py-12 prose prose-xl prose-slate dark:prose-invert mx-auto'>
    <h2 className='text-3xl mt-4 mb-0'>{meta.title}</h2>
    <p className='mt-0 text-sm'>
      {pubDate}
    </p>
    <article>
      {content}
    </article>
    {/* <section>
      <h3>Related:</h3>
      <div className='flex flex-row gap-4'>
        {tags}
      </div>
    </section> */}
    <p className='mb-10'>
      <Link href="/">Back to home</Link>
    </p>
   </div>
   </>
  )
}

