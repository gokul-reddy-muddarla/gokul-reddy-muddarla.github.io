import Link from 'next/link';

export default function TeachingPage() {
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
              <Link href="/teaching" className="text-blue-500">Teaching</Link>
              <Link href="/blog" className="text-gray-600 hover:text-blue-500 transition">Blog</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Teaching</h1>

        <div className="space-y-8">
          <div className="border-l-4 border-blue-500 pl-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Teaching Assistant - Natural Language Processing</h2>
            <p className="text-gray-600 font-semibold mb-2">University of Southern California</p>
            <p className="text-gray-700 leading-relaxed">
              I served as a Teaching Assistant for the NLP course at USC, where I helped students understand fundamental concepts in natural language processing, including tokenization, word embeddings, sequence models, and transformer architectures. I held office hours, graded assignments, and helped develop course materials.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Responsibilities</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Conducted weekly office hours and Q&A sessions</li>
              <li>• Graded assignments and provided detailed feedback</li>
              <li>• Helped develop practical exercises and projects</li>
              <li>• Assisted in course material development</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}