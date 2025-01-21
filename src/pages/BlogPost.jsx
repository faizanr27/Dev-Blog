import { useParams } from 'react-router-dom';
import { format } from 'date-fns';

const MOCK_POST = {
  id: 1,
  title: 'Getting Started with React',
  content: `
    React is a powerful library for building user interfaces. It allows you to create
    reusable UI components that manage their own state and render efficiently.
    
    In this post, we'll cover the basics of React and how to get started with your
    first React application.
  `,
  coverImage: 'https://picsum.photos/seed/react/1200/600',
  publishedAt: '2024-02-10T10:00:00Z',
  author: {
    name: 'John Doe',
    avatar: 'https://picsum.photos/seed/john/100/100',
    bio: 'Frontend Developer & Technical Writer'
  }
};

function BlogPost() {
  const { id } = useParams();
  const post = MOCK_POST;

  return (
    <article className="max-w-4xl mx-auto px-4 py-20">
      <img 
        src={post.coverImage}
        alt={post.title}
        className="w-full h-[400px] object-cover rounded-xl mb-8"
      />
      <h1 className="text-4xl font-bold mb-6 dark:text-white text-black/80">{post.title}</h1>
      
      <div className="flex items-center gap-4 mb-8 text-gray-600 dark:text-gray-400">
        <img 
          src={post.author.avatar}
          alt={post.author.name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <div className="font-semibold">{post.author.name}</div>
          <div className="text-sm">{post.author.bio}</div>
          <time className="text-sm" dateTime={post.publishedAt}>
            {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
          </time>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none dark:text-white text-black/80">
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

export default BlogPost;