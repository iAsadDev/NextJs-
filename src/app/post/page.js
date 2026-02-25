import Link from "next/link";
import { posts } from "../data/pageData.js";

const Posts = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">All Posts</h1>

      <div className="grid gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-6 border rounded-xl shadow-md hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {post.title}
            </h2>

            {/* Limited Description */}
            <p className="text-gray-600 mb-3">
              {post.description.slice(0, 20)}...
            </p>

            <p className="text-sm text-gray-500 mb-4">
              By {post.author}
            </p>

            <Link
            href={`/post/${post.id}`}
              className="text-blue-600 font-medium hover:underline"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;