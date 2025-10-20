import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogPostsDirectory = path.join(process.cwd(), 'blog-posts');

export interface Post {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(blogPostsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(blogPostsDirectory);

  const posts = files
    .filter(file => file.endsWith('.mdx') || file.endsWith('.md'))
    .map(file => {
      const fullPath = path.join(blogPostsDirectory, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug: file.replace(/\.(mdx|md)$/, ''),
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        summary: data.summary || '',
        content: content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  const posts = getAllPosts();
  return posts.find(post => post.slug === slug);
}