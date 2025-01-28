import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { BACKEND_URL } from "../config";

type Author = {
  name: string;
  avatar: string;
  bio: string;
};

type PostDetails = {
  id: number;
  title: string;
  description: string;
  image?: string;
  createdAt: string;
  author?: Author;
};

function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<PostDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      setLoading(true);
      axios
        .get(`${BACKEND_URL}/Post/${id}`)
        .then((response) => {
          setPost(response.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen w-screen"><p className="text-2xl text-white">Loading...</p></div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen w-screen"><p className="text-2xl text-white">Error: {error}</p></div>;
  }

  if (!post) {
    return <div className="flex justify-center items-center h-screen w-screen"><p className="text-2xl text-white">Post not found.</p></div>;
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-20">
      <img
        src={post.image ? post.image : "https://picsum.photos/seed/react/1200/600"}
        alt={post.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h1 className="text-4xl font-bold mb-6 dark:text-white text-black/80">{post.title}</h1>

      <div className="flex items-center gap-4 mb-8 text-gray-600 dark:text-gray-400">
      {/* {post.author.avatar && ( */}
            <img
              src={post.author?.avatar || "https://picsum.photos/seed/john/100/100"}
              alt={post.author?.name || "Author"}
              className="w-12 h-12 rounded-full"
            />
          {/* )} */}
        <div>
        <span>{post.author?.name || "Unknown Author"}</span>
          <div className="text-sm">{post.author?.bio}</div>
          <time className="text-sm" dateTime={post.createdAt}>
            {format(new Date(post.createdAt), 'MMMM d, yyyy')}
          </time>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none dark:text-white text-black/80">
        {post.description.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

export default BlogPost;
