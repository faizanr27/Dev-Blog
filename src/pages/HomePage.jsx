import { useState } from 'react';
import BlogCard from '../components/BlogCard/BlogCard';

const MOCK_POSTS = [
  {
    id: 1,
    title: 'Getting Started with React',
    excerpt: 'Learn the fundamentals of React and start building modern web applications.',
    coverImage: 'https://picsum.photos/seed/react/800/400',
    publishedAt: '2024-02-10T10:00:00Z',
    author: {
      name: 'John Doe',
      avatar: 'https://picsum.photos/seed/john/100/100'
    }
  },
  {
    id: 2,
    title: 'Advanced React Patterns',
    excerpt: 'Dive deep into advanced React patterns and improve your code quality.',
    coverImage: 'https://picsum.photos/seed/patterns/800/400',
    publishedAt: '2024-02-09T15:30:00Z',
    author: {
      name: 'Jane Smith',
      avatar: 'https://picsum.photos/seed/jane/100/100'
    }
  },
  {
    id: 3,
    title: 'Advanced React Patterns',
    excerpt: 'Dive deep into advanced React patterns and improve your code quality.',
    coverImage: 'https://picsum.photos/seed/patterns/800/400',
    publishedAt: '2024-02-09T15:30:00Z',
    author: {
      name: 'Jane Smith',
      avatar: 'https://picsum.photos/seed/jane/100/100'
    }
  },
  {
    id: 4,
    title: 'Advanced React Patterns',
    excerpt: 'Dive deep into advanced React patterns and improve your code quality.',
    coverImage: 'https://picsum.photos/seed/patterns/800/400',
    publishedAt: '2024-02-09T15:30:00Z',
    author: {
      name: 'Jane Smith',
      avatar: 'https://picsum.photos/seed/jane/100/100'
    }
  },
  {
    id: 5,
    title: 'Advanced React Patterns',
    excerpt: 'Dive deep into advanced React patterns and improve your code quality.',
    coverImage: 'https://picsum.photos/seed/patterns/800/400',
    publishedAt: '2024-02-09T15:30:00Z',
    author: {
      name: 'Jane Smith',
      avatar: 'https://picsum.photos/seed/jane/100/100'
    }
  },
  {
    id: 6,
    title: 'Advanced React Patterns',
    excerpt: 'Dive deep into advanced React patterns and improve your code quality.',
    coverImage: 'https://picsum.photos/seed/patterns/800/400',
    publishedAt: '2024-02-09T15:30:00Z',
    author: {
      name: 'Jane Smith',
      avatar: 'https://picsum.photos/seed/jane/100/100'
    }
  },
];

function HomePage() {
  const [posts] = useState(MOCK_POSTS);

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8 dark:text-white text-black/80">Latest Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;