import { posts } from '@/app/data/blog'
import Link from 'next/link'






export  async function generateStaticParams(){
  return posts.map(post=>({id: post.id.toString()}))
}
export default async function BlogPost ({params}){
  params =await params
  const post = posts.find(p => p.id.toString() === params.id)
  return (
    <>
    <Link href="/blog">Back</Link>
    <div>{post.title}</div>
    <div>{post.des}</div>
    </>
  )
}


