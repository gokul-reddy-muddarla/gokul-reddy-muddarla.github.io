'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/lib/get-posts';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [darkMode, setDarkMode] = useState(false);
  const post = getPostBySlug(params.slug);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  if (!post) {
    return <div>Post not found</div>;
  }

  const bgColor = darkMode ? 'bg-gray-950' : 'bg-white';
  const textColor = darkMode ? 'text-gray-100' : 'text-gray-900';
  const secondaryText = darkMode ? 'text-gray-400' : 'text-gray-600';
  const borderColor = darkMode ? 'border-gray-800' : 'border-gray-200';
  const cardBg = darkMode ? 'bg-gray-900' : 'bg-white';
  const inputBg = darkMode ? 'bg-gray-800' : 'bg-gray-50';

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} transition-colors duration-300`}>
      <nav className={`${cardBg} border-b ${borderColor} sticky top-0 z-50`}>
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className={`text-2xl font-bold ${textColor} hover:text-blue-500 transition`}>
              M. Gokul Reddy
            </Link>

            <div className="hidden md:flex gap-8 items-center">
              <Link href="/" className={`${secondaryText} hover:text-blue-500 transition`}>Home</Link>
              <Link href="/teaching" className={`${secondaryText} hover:text-blue-500 transition`}>Teaching</Link>
              <Link href="/blog" className={`${secondaryText} hover:text-blue-500 transition`}>Blog</Link>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${inputBg} hover:opacity-80 transition`}
              >
                {darkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link href="/blog" className="text-blue-500 hover:underline mb-8 inline-block">
          ← Back to Reading Notes
        </Link>

        <article>
          <h1 className={`text-4xl font-bold ${textColor} mb-2`}>{post.title}</h1>
          <p className={`${secondaryText} mb-8 text-lg`}>{post.date}</p>

          <div className={`${secondaryText} leading-relaxed prose prose-invert max-w-none`}>
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