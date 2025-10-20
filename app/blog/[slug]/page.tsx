import React from 'react';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '../../../lib/get-posts';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-500 transition">
              Gokul Reddy Muddarla
            </Link>

            <div className="hidden md:flex gap-8 items-center">
              <Link href="/" className="text-gray-600 hover:text-blue-500 transition">Home</Link>
              <Link href="/teaching" className="text-gray-600 hover:text-blue-500 transition">Teaching</Link>
              <Link href="/blog" className="text-gray-600 hover:text-blue-500 transition">Blog</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link href="/blog" className="text-blue-500 hover:underline mb-8 inline-block">
          ← Back to Reading Notes
        </Link>

        <article>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{post.title}</h1>
          <p className="text-gray-600 mb-8 text-lg">{post.date}</p>

          <div className="text-gray-700 leading-relaxed prose max-w-none">
            <MDXRemote source={post.content} />
          </div>
        </article>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}