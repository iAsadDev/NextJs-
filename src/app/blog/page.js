import { posts } from '@/app/data/blog';
import Link from 'next/link';

export default function Blog() {
  return (
    <div>
      <h1>All Blog Posts</h1>
      {posts.map(post => (
        <div key={post.id} style={{ marginBottom: '20px' }}>
          <h2>{post.title}</h2>
          <p>{post.des}</p>
          <Link href={`/blog/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}