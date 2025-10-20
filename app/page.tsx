'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

export default function Website() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const blogPosts = [
    {
      id: 1,
      title: "Attention Is All You Need",
      date: "October 12, 2025",
      summary: "Notes on the transformer architecture and why attention mechanisms are so powerful for NLP tasks.",
      content: "The paper introduces the Transformer architecture, which relies entirely on attention mechanisms without recurrence or convolutions. Key insights: self-attention allows the model to weigh different input tokens differently, enabling parallel processing. The multi-head attention mechanism lets the model attend to different representation subspaces. This architecture has become the foundation for modern LLMs."
    },
    {
      id: 2,
      title: "BERT: Pre-training of Deep Bidirectional Transformers",
      date: "October 5, 2025",
      summary: "Understanding bidirectional pre-training and its impact on NLP downstream tasks.",
      content: "BERT introduces bidirectional training by masking random tokens and predicting them from context. Unlike GPT's left-to-right approach, BERT's bidirectional pre-training allows the model to learn richer representations. The masked language modeling objective and next sentence prediction pre-training tasks significantly improve downstream task performance. Fine-tuning on specific tasks requires minimal task-specific architecture changes."
    }
  ];

  const bgColor = darkMode ? 'bg-gray-950' : 'bg-white';
  const textColor = darkMode ? 'text-gray-100' : 'text-gray-900';
  const secondaryText = darkMode ? 'text-gray-400' : 'text-gray-600';
  const borderColor = darkMode ? 'border-gray-800' : 'border-gray-200';
  const cardBg = darkMode ? 'bg-gray-900' : 'bg-white';
  const cardHover = darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50';
  const inputBg = darkMode ? 'bg-gray-800' : 'bg-gray-50';

  const NavBar = () => (
    <nav className={`${cardBg} border-b ${borderColor} sticky top-0 z-50`}>
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }}
            className={`text-2xl font-bold ${textColor} hover:text-blue-500 transition`}
          >
            M. Gokul Reddy
          </button>

          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => setCurrentPage('home')} className={`${currentPage === 'home' ? 'text-blue-500' : secondaryText} hover:text-blue-500 transition`}>Home</button>
            <button onClick={() => setCurrentPage('teaching')} className={`${currentPage === 'teaching' ? 'text-blue-500' : secondaryText} hover:text-blue-500 transition`}>Teaching</button>
            <button onClick={() => setCurrentPage('blog')} className={`${currentPage === 'blog' ? 'text-blue-500' : secondaryText} hover:text-blue-500 transition`}>Blog</button>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${inputBg} hover:opacity-80 transition`}
            >
              {darkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${inputBg} hover:opacity-80 transition`}
            >
              {darkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} />}
            </button>
            <button onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4">
            <button onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }} className={`text-left ${secondaryText} hover:text-blue-500`}>Home</button>
            <button onClick={() => { setCurrentPage('teaching'); setIsMenuOpen(false); }} className={`text-left ${secondaryText} hover:text-blue-500`}>Teaching</button>
            <button onClick={() => { setCurrentPage('blog'); setIsMenuOpen(false); }} className={`text-left ${secondaryText} hover:text-blue-500`}>Blog</button>
          </div>
        )}
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <div className={`w-32 h-32 ${inputBg} rounded-xl mb-6`}></div>
        <h1 className={`text-5xl font-bold ${textColor} mb-4`}>M. Gokul Reddy</h1>
        <p className={`text-xl ${secondaryText} mb-6`}>
          Machine Learning & AI Researcher
        </p>
        <p className={`text-lg ${secondaryText} leading-relaxed mb-6 max-w-2xl`}>
          Based in San Francisco. I'm passionate about machine learning, artificial intelligence, and building intelligent systems. My work focuses on AI agents, optimization algorithms, and practical applications of machine learning to real-world problems.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className={`text-xl font-bold ${textColor} mb-4`}>Education</h2>
          <div className="space-y-4">
            <div>
              <p className={`font-semibold ${textColor}`}>University of Southern California</p>
              <p className={secondaryText}>M.S. in Computer Science</p>
              <p className={`text-sm ${secondaryText}`}>Focus: Machine Learning & AI</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className={`text-xl font-bold ${textColor} mb-4`}>Research Interests</h2>
          <ul className={`space-y-2 ${secondaryText}`}>
            <li>• AI Agents & Optimization</li>
            <li>• Machine Learning Systems</li>
            <li>• Natural Language Processing</li>
            <li>• Data-Driven Solutions</li>
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h2 className={`text-2xl font-bold ${textColor} mb-6`}>Contact</h2>
        <div className={`space-y-2 ${secondaryText}`}>
          <p>Email: <span className={`font-semibold ${textColor}`}>mgokul.reddy@gmail.com</span></p>
          <p>GitHub: <a href="https://github.com/gokul-reddy-muddarla" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">github.com/gokul-reddy-muddarla</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/m-gokul-reddy/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">linkedin.com/in/m-gokul-reddy</a></p>
        </div>
      </div>
    </div>
  );

  const TeachingPage = () => (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className={`text-3xl font-bold ${textColor} mb-8`}>Teaching</h1>

      <div className="space-y-8">
        <div className="border-l-4 border-blue-500 pl-6">
          <h2 className={`text-2xl font-bold ${textColor} mb-2`}>Teaching Assistant - Natural Language Processing</h2>
          <p className={`${secondaryText} font-semibold mb-2`}>University of Southern California</p>
          <p className={`${secondaryText} leading-relaxed`}>
            I served as a Teaching Assistant for the NLP course at USC, where I helped students understand fundamental concepts in natural language processing, including tokenization, word embeddings, sequence models, and transformer architectures. I held office hours, graded assignments, and helped develop course materials.
          </p>
        </div>

        <div className={`${inputBg} p-6 rounded-lg`}>
          <h3 className={`text-lg font-semibold ${textColor} mb-3`}>Responsibilities</h3>
          <ul className={`space-y-2 ${secondaryText}`}>
            <li>• Conducted weekly office hours and Q&A sessions</li>
            <li>• Graded assignments and provided detailed feedback</li>
            <li>• Helped develop practical exercises and projects</li>
            <li>• Assisted in course material development</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const BlogListPage = () => (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className={`text-3xl font-bold ${textColor} mb-2`}>Reading Notes</h1>
      <p className={`${secondaryText} mb-8`}>Weekly notes on papers and books I'm reading in ML/NLP</p>

      <div className="space-y-4">
        {blogPosts.map(post => (
          <button
            key={post.id}
            onClick={() => { setSelectedPost(post); setCurrentPage('post'); }}
            className={`w-full text-left border ${borderColor} rounded-lg p-6 ${cardHover} transition`}
          >
            <div className="flex justify-between items-start mb-2">
              <h2 className={`text-xl font-bold ${textColor}`}>{post.title}</h2>
              <span className={`text-sm ${secondaryText}`}>{post.date}</span>
            </div>
            <p className={`${secondaryText}`}>{post.summary}</p>
          </button>
        ))}
      </div>

      <div className={`mt-12 ${inputBg} border ${borderColor} rounded-lg p-6`}>
        <h3 className={`font-semibold ${textColor} mb-2`}>How to add new notes:</h3>
        <p className={secondaryText}>Create a new markdown file in your <code className={`${cardBg} px-2 py-1 rounded`}>/blog</code> folder with the date and title. Example: <code className={`${cardBg} px-2 py-1 rounded`}>2025-10-19-paper-title.md</code></p>
      </div>
    </div>
  );

  const BlogPostPage = () => {
    if (!selectedPost) return null;
    return (
      <div className="max-w-3xl mx-auto px-6 py-12">
        <button
          onClick={() => { setCurrentPage('blog'); setSelectedPost(null); }}
          className="text-blue-500 hover:underline mb-8"
        >
          ← Back to Reading Notes
        </button>

        <article>
          <h1 className={`text-4xl font-bold ${textColor} mb-2`}>{selectedPost.title}</h1>
          <p className={`${secondaryText} mb-8 text-lg`}>{selectedPost.date}</p>

          <div className={`${secondaryText} leading-relaxed text-lg space-y-6`}>
            <p>{selectedPost.content}</p>

            <div className={`border-t ${borderColor} pt-6 mt-8`}>
              <h3 className={`font-semibold ${textColor} mb-4`}>Key Takeaways:</h3>
              <ul className="space-y-2">
                <li>• This is a detailed reading note where you can expand on your thoughts</li>
                <li>• Add citations, equations, and code examples as needed</li>
                <li>• Use this space to document your learning and insights</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} transition-colors duration-300`}>
      <NavBar />

      {currentPage === 'home' && <HomePage />}
      {currentPage === 'teaching' && <TeachingPage />}
      {currentPage === 'blog' && <BlogListPage />}
      {currentPage === 'post' && <BlogPostPage />}

      <footer className={`${cardBg} border-t ${borderColor} mt-16`}>
        <div className="max-w-4xl mx-auto px-6 py-8 text-center">
          <p className={secondaryText}>© 2025 M. Gokul Reddy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}