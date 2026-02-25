import { posts } from "@/app/data/pageData";
import Link from "next/link";

export async function generateStaticParams() {
  return posts.map((p) => ({
    id: p.id.toString(),
  }));
}

export default async function PageDetail({ params }) {
        params = await params
  const post = posts.find(
    (p) => p.id.toString() ===params.id
  );

  if (!post) {
    return <div className="text-center mt-10">Post Not Found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-8">
      {/* Back Button */}
      <Link
        href="/blog"
        className="text-blue-600 hover:underline mb-6 inline-block"
      >
        ← Back to Posts
      </Link>

      {/* Card */}
      <div className="bg-white shadow-xl rounded-2xl p-8 mt-4">
        <h1 className="text-4xl font-bold mb-4">
          {post.title}
        </h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          {post.description}
        </p>

        <div className="text-sm text-gray-500 border-t pt-4">
          Written by <span className="font-medium">{post.author}</span>
        </div>
      </div>
    </div>
  );
}