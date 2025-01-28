import { useRef, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useContent } from "../hooks/useContent";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  // const imageRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const { refresh } = useContent();
  const navigate = useNavigate()

  async function addContent() {
    setLoading(true);
    const title = titleRef.current?.value;
    const description = descriptionRef.current?.value;
    // const image = imageRef.current?.files?.[0];

    if (!title || !description) {
      alert("Title and Description are required!");
      setLoading(false);
      return;
    }

    try {

      await axios.post(
        `${BACKEND_URL}/createpost`,
        {
          title,
          description,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );


      alert("Post created successfully!");
      if (titleRef.current) titleRef.current.value = "";
      if (descriptionRef.current) descriptionRef.current.value = "";
      // if (imageRef.current) imageRef.current.value = "";
      refresh();
      navigate('/')
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black/80 dark:text-white">
            Write Your Blog Here
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="Title"
              className="block text-sm font-medium mb-1 text-black/80 dark:text-gray-400"
            >
              Title
            </label>
            <input
              ref={titleRef}
              type="text"
              placeholder="Enter the title"
              className="dark:bg-white/20 bg-slate-400/20 text-black dark:text-white rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-[#2D5FB2] transition duration-200"
            />
          </div>
          <div>
            <label
              htmlFor="Description"
              className="block text-sm font-medium mb-1 text-black/80 dark:text-gray-400"
            >
              Description
            </label>
            <textarea
              ref={descriptionRef}
              placeholder="Enter the description"
              className="dark:bg-white/20 bg-slate-400/20 text-black dark:text-white rounded-lg p-4 w-full min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#2D5FB2] transition duration-200"
            />
          </div>
          <div>
            <label
              htmlFor="Image"
              className="block text-sm font-medium mb-1 text-black/80 dark:text-gray-400"
            >
              Image (Optional)
            </label>
            <input
              // ref={imageRef}
              type="file"
              accept="image/*"
              className="block w-full text-sm text-black dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#2D5FB2]/20 file:text-[#2D5FB2] hover:file:bg-[#2D5FB2]/50"
            />
          </div>
          <button
            type="button"
            onClick={addContent}
            disabled={loading}
            className={`${
              loading ? "bg-[#2D5FB2]/50" : "bg-[#2D5FB2]"
            } text-white px-6 py-3 rounded-md hover:bg-[#2D5FB2]/80 transition duration-300 font-semibold`}
          >
            {loading ? "Creating..." : "Create Post"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
