import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Blog {
  id: string;
  title: string;
  content: string;
  category: string;
  authorId: string;
  imageUrl?: string; // Optional image property
}

export const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

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
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="p-8 bg-gradient-to-r from-blue-200 to-green-200 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Explore Our Blogs</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Link 
            to={`/blog/${blog.id}`} 
            key={blog.id} 
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-200 ease-in-out"
          >
            {/* Optional Image */}
            {blog.imageUrl && (
              <img 
                src={blog.imageUrl} 
                alt={blog.title} 
                className="w-full h-48 object-cover rounded-t-lg" 
              />
            )}
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-900">{blog.title}</h2>
              <p className="text-sm text-gray-500 mt-1">By Author ID: {blog.authorId}</p>
              <span className="inline-block mt-2 px-2 py-1 text-xs font-bold text-white bg-blue-500 rounded-full">
                {blog.category}
              </span>
              <p className="text-gray-700 mt-3">{blog.content.substring(0, 100)}...</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
