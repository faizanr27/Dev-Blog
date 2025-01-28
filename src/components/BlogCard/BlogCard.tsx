import { Link } from 'react-router-dom';
import { format } from 'date-fns';

type Post = {
  _id: string;
  title: string;
  description?: string; // Optional
  excerpt?: string; // Optional
  image?: string; // Optional
  publishedAt?: string; // Optional
  userId?: string; // Optional
  createdAt?: string; // Optional
  updatedAt?: string; // Optional
  name?: string;
  avatar?: string; // Optional
};

type BlogCardProps = {
  post: Post;
};

function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="card hover:shadow-md transition-shadow dark:bg-[#1F2937]/50 backdrop-blur-sm shadow-xl">
      {/* Cover Image */}

      <img
        src={post.image ? post.image : "https://picsum.photos/seed/react/1200/600"}
        alt={post.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />


      {/* Title */}
      <h2 className="text-xl dark:text-white text-black/80 font-bold mb-2">
        <Link to={`/post/${post._id}`} className="hover:text-primary">
          {post.title}
        </Link>
      </h2>

      {/* Excerpt or Description */}
      <p className="text-black/60 dark:text-gray-400 mb-4 line-clamp-2">
        {post.excerpt || post.description || "No description available."}
      </p>

      {/* Footer: Author and Date */}
      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-2">
          {post.avatar && (
            <img
              src={post.avatar}
              alt={post.name || "Author"}
              className="w-6 h-6 rounded-full"
            />
          )}
          <span>{post.name || "Unknown Author"}</span>
        </div>
        {post.createdAt && (
          <time dateTime={post.createdAt}>
            {format(new Date(post.createdAt), 'MMM d, yyyy')}
          </time>
        )}
      </div>
    </article>
  );
}

export default BlogCard;
