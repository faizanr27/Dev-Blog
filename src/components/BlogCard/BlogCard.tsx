import { Link } from 'react-router-dom';
import { format } from 'date-fns';

type Post = {
  id: number;
  title: string;
  excerpt: string;
  coverImage?: string;
  publishedAt: string;
  author: {
    name: string;
    avatar: string;
  };
};

type BlogCardProps = {
  post: Post;
};

function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="card hover:shadow-md transition-shadow dark:bg-[#1F2937]/50 backdrop-blur-sm shadow-xl ">
      {post.coverImage && (
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}
      <h2 className="text-xl dark:text-white text-black/80 font-bold mb-2">
        <Link to={`/post/${post.id}`} className="hover:text-primary">
          {post.title}
        </Link>
      </h2>
      <p className=" text-black/60 dark:text-gray-400 mb-4 line-clamp-2">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-6 h-6 rounded-full"
          />
          <span>{post.author.name}</span>
        </div>
        <time dateTime={post.publishedAt}>
          {format(new Date(post.publishedAt), 'MMM d, yyyy')}
        </time>
      </div>
    </article>
  );
}

export default BlogCard;