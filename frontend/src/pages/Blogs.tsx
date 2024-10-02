import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

interface Blog {
  id: string;
  title: string;
  content: string;
  category: string;
  authorId: string;
}

// Skeleton Loader Component
const BlogSkeleton = () => (
  <div className="bg-white rounded-lg shadow-md">
    <div className="p-4">
      <div className="h-6 bg-gray-200 rounded-full w-48 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded-full max-w-[480px] mb-2.5"></div>
      <div className="h-4 bg-gray-200 rounded-full max-w-[440px] mb-2.5"></div>
      <div className="h-4 bg-gray-200 rounded-full max-w-[460px] mb-2.5"></div>
    </div>
  </div>
);

export const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.error("No token found");
          return;
        }

        const response = await axios.get(
          "https://backend.vrushabhpatil4801.workers.dev/api/v1/blog/api/v1/blog/bulk",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setBlogs(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main content */}
      <div className="flex-grow p-8">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Explore Our Blogs</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto">
          {loading ? (
            <>
              <BlogSkeleton />
              <BlogSkeleton />
              <BlogSkeleton />
            </>
          ) : (
            blogs.map((blog) => (
              <Link 
                to={`/blog/${blog.id}`} 
                key={blog.id} 
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-200 ease-in-out"
              >
                <div className="p-4 border-b-2 border-gray-200">
                  <div className="flex items-center mb-2">
                    <p className="text-sm text-gray-600">By Anonymous</p>
                  </div>
                  <h2 className="text-2xl font-extrabold text-gray-900">{blog.title}</h2>
                  <span className="inline-block mt-2 px-2 py-1 text-xs font-bold text-white bg-blue-500 rounded-full">
                    {blog.category}
                  </span>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};
