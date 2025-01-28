
import BlogCard from '../components/BlogCard/BlogCard';
import { useContent } from "../hooks/useContent";


function HomePage() {
  const { contents = [], error } = useContent();
  console.log(contents)
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <p className="text-2xl text-white">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8 dark:text-white text-black/80">Latest Posts</h1>
      {contents.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contents.slice().reverse().map((post)=> (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
        ) : (
          <div className="flex justify-center items-center h-screen w-screen">
          <p className="text-2xl text-black dark:text-white">No content available.</p>
        </div>
      )}
    </div>
  );
}

export default HomePage;