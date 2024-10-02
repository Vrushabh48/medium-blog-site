import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

// Structure of blog
interface Blog {
  id: string;
  title: string;
  content: string;
  category: string;
  authorId: string;
}

const BlogSkeleton = () => (
  <div className="bg-white rounded-lg shadow-md mb-6">
    <div className="p-4">
      <div className="h-6 bg-gray-200 rounded-full w-48 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded-full max-w-[480px] mb-2.5"></div>
      <div className="h-4 bg-gray-200 rounded-full max-w-[440px] mb-2.5"></div>
      <div className="h-4 bg-gray-200 rounded-full max-w-[460px] mb-2.5"></div>
    </div>
  </div>
);

export const Blog = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.error("No token found");
          return;
        }

        const response = await axios.get(
          `https://backend.vrushabhpatil4801.workers.dev/api/v1/blog/${id}`, // Update with the correct endpoint for a single blog
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setBlog(response.data); // Set the fetched blog data
        setLoading(false); // Set loading to false after fetching
      } catch (error) {
        console.error("Error fetching blog:", error);
        setLoading(false); // Ensure loading is set to false even on error
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    // Render skeleton loader while the data is still being fetched
    return (
      <div className="p-8 flex flex-col items-center min-h-screen">
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
      </div>
    );
  }

  if (!blog) {
    return <div className="text-center p-8">No blog found</div>; // Handle case when no blog is found
  }

  return (
    <div className="p-9 min-h-screen">
      <div className="mb-6 border-b">
        <Header />
      </div>
      <div className="pt-4 mx-auto w-full md:w-3/4 lg:w-1/2 bg-white rounded-lg shadow-lg p-6">
        {/* Blog Title */}
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4 leading-tight break-words">
          {blog.title}
        </h1>
        <p className="text-black w-fit rounded-full p-2 font-medium mb-2 tracking-wide">By Anonymous</p>
        {/* Blog Category */}
        <p className="text-sm text-white bg-blue-500 w-fit rounded-full p-2 font-semibold mb-6 tracking-wide uppercase">
          Category: {blog.category}
        </p>

        {/* Blog Content */}
        <div className="text-lg text-gray-700 leading-relaxed break-words font-medium">
          {blog.content}
        </div>
      </div>
      <Footer />
    </div>
  );
};
