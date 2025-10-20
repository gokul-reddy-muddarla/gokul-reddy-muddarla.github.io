'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { getAllPosts } from '@/lib/get-posts';

export default function BlogPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
    setPosts(getAllPosts());
  }, []);

  const bgColor = darkMode ? 'bg-gray-950' : 'bg-white';
  const textColor = darkMode ? 'text-gray-100' : 'text-gray-900';
  const secondaryText = darkMode ? 'text-gray-400' : 'text-gray-600';
  const borderColor = darkMode ? 'border-gray-800' : 'border-gray-200';
  const cardBg = darkMode ? 'bg-gray-900' : 'bg-white';
  const cardHover = darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50';
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
              <Link href="/blog" className="text-blue-500">Blog</Link>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${inputBg} hover:opacity-80 transition`}
              >
                {darkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} />}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${inputBg}`}
              >
                {darkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className={`text-3xl font-bold ${textColor} mb-2`}>Reading Notes</h1>
        <p className={`${secondaryText} mb-8`}>Weekly notes on papers and books I'm reading in ML/NLP</p>

        <div className="space-y-4">
          {posts.map(post => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`block border ${borderColor} rounded-lg p-6 ${cardHover} transition`}
            >
              <div className="flex justify-between items-start mb-2">
                <h2 className={`text-xl font-bold ${textColor}`}>{post.title}</h2>
                <span className={`text-sm ${secondaryText}`}>{post.date}</span>
              </div>
              <p className={`${secondaryText}`}>{post.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}