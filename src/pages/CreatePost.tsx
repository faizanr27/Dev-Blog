
function CreatePost() {


  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black/80 dark:text-white">Write Your Blog Here</h2>
        </div>
        <div className='flex flex-col gap-2'>
        <label htmlFor="Title" className="block text-sm font-medium mb-1 text-black/80 dark:text-gray-400">
            Title
          </label>
            <input type="text" className='dark:bg-white/20 bg-slate-400/20 text-black dark:text-white rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-[#2D5FB2] transition duration-200'/>
            <label htmlFor="Description" className="block text-sm font-medium mb-1 text-black/80 dark:text-gray-400">
            Description
          </label>
            <textarea className='dark:bg-white/20 bg-slate-400/20 text-black dark:text-white rounded-lg p-4 w-full min-h-60 focus:outline-none focus:ring-2 focus:ring-[#2D5FB2] transition duration-200'/>
            <label htmlFor="Image" className="block text-sm font-medium mb-1 text-black/80 dark:text-gray-400">
            Image
          </label>
            <input type="file" />
            <button
          type="submit"
          className="bg-[#2D5FB2] text-white px-6 py-3 rounded-md hover:bg-[#2D5FB2]/80 transition duration-300 font-semibold"
        >
          Create Post
        </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;