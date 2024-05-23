"use client";

import Link from "next/link";

function PostCard({ post }) {
  return (
    <div className="bg-gray-900 p-3">
      <h3 className="text-xl font-bold mb-5">
        {post.id}.{post.title}
      </h3>
      <p>{post.body}</p>
      <Link href={`/posts/${post.id}`}>Ver</Link>
    </div>
  );
}

export default PostCard;
