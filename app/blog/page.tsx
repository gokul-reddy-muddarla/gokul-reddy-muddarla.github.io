import React from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { getAllPosts } from '@/lib/get-posts';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-500 transition">
              M. Gokul Reddy
            </Link>

            <div className="hidden md:flex gap-8 items-center">
              <Link href="/" className="text-gray-600 hover:text-blue-500 transition">Home</Link>
              <Link href="/teaching" className="text-gray-600 hover:text-blue-500 transition">Teaching</Link>
              <Link href="/blog" className="text-blue-500">Blog</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Reading Notes</h1>
        <p className="text-gray-600 mb-8">Weekly notes on papers and books I'm reading in ML/NLP</p>

        <div className="space-y-4">
          {posts.map(post => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition"
            >
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-bold text-gray-900">{post.title}</h2>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
              <p className="text-gray-600">{post.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}